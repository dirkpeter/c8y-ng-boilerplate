import { Injectable, isDevMode } from '@angular/core';
import { CumulocityService } from '../_services';
import { IResultList, IManagedObject, Client } from '@c8y/client';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private DEBUG: boolean = true;
  private PAGE_SIZE: number = 100;
  private client: Client;
  public groups: Array<IManagedObject> = [];

  constructor(private C8Y: CumulocityService) {
    this.client = this.C8Y.client;
  }

  private _log(txt: string, ...args: any): void {
    if (isDevMode() && this.DEBUG) {
      console.log('[AssetService] ' + txt, args);
    }
  }

  async fetchAssets() {
    this._log('fetchAssets');
    const filter = {
      query: '$filter=((type eq \'c8y_DeviceGroup\'))$orderby=name', // order is case sensitive
      fragmentType: 'c8y_IsDeviceGroup', // root objects only
      pageSize: this.PAGE_SIZE,
      withTotalPages: true,
      skipChildrenNames: true // names not needed/optional as full MO will be fetched if required
    };

    return this.client.inventory
      .list(filter)
      .then((res: IResultList<IManagedObject>): void => {
        this._log('fetchAssets|res', res);
        this.groups = [...this.groups, ...res.data];
        this.fetchRemainingAssets(res);
      });
  }

  private async fetchRemainingAssets(res) {
    this._log('fetchRemainingAssets', res);
  }

  async fetchChildren(assetId) {
    this._log('fetchChildren');
    const filter = {
      pageSize: this.PAGE_SIZE,
    };

    return this.client.inventory
      .childAssetsList(assetId, filter)
      .then((res: IResultList<IManagedObject>): void => {
        this._log('fetchChildren|res', res);
        this.groups = [...this.groups, ...res.data];
      });
  }

  // get assets by key
}
