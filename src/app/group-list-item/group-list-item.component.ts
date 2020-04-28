import { Component, Input, OnInit, isDevMode } from '@angular/core';
import { CumulocityService } from '../_services';
import { Client, IManagedObject, IResult, IResultList } from '@c8y/client';

@Component({
  selector: 'group-list-item',
  templateUrl: './group-list-item.component.html',
  styleUrls: ['./group-list-item.component.scss']
})

export class GroupListItemComponent implements OnInit {
  @Input() group:IManagedObject;
  @Input() open:boolean;

  private DEBUG:boolean = false;
  public isLoading:boolean;
  public showChildren:boolean;
  private client: Client;

  constructor(public C8Y: CumulocityService) {
    this.client = this.C8Y.client;
  }

  private _log(txt: any, ...args: any): void {
    if (isDevMode() && this.DEBUG) {
      console.log('[GroupListComponent] ' + txt, args);
    }
  }

  ngOnInit(): void{
    this._log('ngOnInit', this);

    // need to fetch its own data?
    if (this.group && this.group.id) {
      this.isLoading = false;
    }
    else {
      this.isLoading = true;
      this.fetchSelf()
        .then((): void => {
          this._log('ngOnInit|fetchSelf');
          this.isLoading = false;
        });
    }
  }

  toggleChildrenDisplay(): void {
    this._log('toggleChildrenDisplay');
    this.showChildren = !this.showChildren;
  }

  async fetchSelf(): Promise<IResultList<IManagedObject> | void> {
    this._log('fetchSelf');
    const groupId = (this.group.id) ? this.group.id : this.group.managedObject.id;

    return this.client.inventory
      .detail(groupId)
      .then((res: IResult<IManagedObject>): void => {
        this._log('fetchSelf|res', res);
        this.group = { ... this.group, ... res.data };
      });
  }
}
