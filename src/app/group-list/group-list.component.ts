import { Component, OnInit, isDevMode } from '@angular/core';
import { CumulocityService } from '../_services';
import { IResultList, IManagedObject, Client } from '@c8y/client';

@Component({
  selector: 'group-list',
  templateUrl: './group-list.component.html',
  styleUrls: [ './group-list.component.scss' ]
})

export class GroupListComponent implements OnInit {
  private DEBUG: boolean = false;
  private GROUP_PAGE_SIZE: number = 100;
  private client: Client;
  public isLoading: boolean;
  public groups: Array<IManagedObject>;

  constructor(public C8Y: CumulocityService) {
    this.client = this.C8Y.client;
  }

  private _log(txt: string, ...args: any): void {
    if (isDevMode() && this.DEBUG) {
      console.log('[GroupListComponent] ' + txt, args);
    }
  }

  ngOnInit(): void {
    this._log('ngOnInit');
    this.isLoading = true;
    this.groups = [];

    this.fetchGroups(1)
      .then((res: IResultList<IManagedObject>): void => {
        this._log('ngOnInit|res', res);
        this.fetchMoreGroups(res);
      });
  }

  async fetchGroups(page: number): Promise<IResultList<IManagedObject>> {
    this._log('fetchGroups', page);
    const filter = {
      query: '$filter=((type eq \'c8y_DeviceGroup\'))$orderby=name', // order is case sensitive
      fragmentType: 'c8y_IsDeviceGroup', // root objects only
      pageSize: this.GROUP_PAGE_SIZE,
      currentPage: page,
      withTotalPages: true,
      skipChildrenNames: true // names not needed/optional as full MO will be fetched if required
    };

    return this.client.inventory
      .list(filter)
      .then((res: IResultList<IManagedObject>): IResultList<IManagedObject> => {
        this._log('fetchGroups|res', res);
        if (res && res.data) {
          this.groups = [...this.groups, ...res.data]
            .sort((a, b) => {
              const aName = a.name.toLowerCase();
              const bName = b.name.toLowerCase();
              return (aName < bName) ? -1 : (aName > bName) ? 1 : 0;
            });
        }

        return res;
      });
  }

  fetchMoreGroups(res: IResultList<IManagedObject>): Promise<IResultList<IManagedObject>> | void {
    this._log('fetchMoreGroups', res);
    // no result
    if (!res || !res.paging) {
      this.isLoading = false;
      return;
    }
    const paging = res.paging;

    // no need to load further groups
    if (paging.totalPages <= paging.currentPage) {
      this.isLoading = false;
      return;
    }

    this.fetchGroups(paging.nextPage)
      .then((r: IResultList<IManagedObject>): void => {
        this._log('fetchMoreGroups|res', r);
        this.fetchMoreGroups(r);
      });
  }
}
