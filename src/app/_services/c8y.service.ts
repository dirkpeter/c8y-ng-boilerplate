import { Injectable } from '@angular/core';
import { BasicAuth, Client } from '@c8y/client';
import { environment } from './../../environments/environment';

// TODO set types

@Injectable()
export class CumulocityService {
  public client: Client;
  private storageKey = 'currentUser';
  private authCreds = {
    tenant: '',
    user: '',
    password: ''
  };

  constructor() {
    this.authCreds = { ... this.authCreds, ... environment.auth};
    this.autoLogin();
  }


  async login(username, password) {
    const creds = {... this.authCreds, ... {
      username,
      password
    }};
    const client = new Client(new BasicAuth(creds));

    try {
      const response = await client.user.current();
      this.client = client;
      localStorage.setItem(this.storageKey, JSON.stringify(creds));

      return response.data;
    } catch (err) {
      console.log(err);
    }
  }


  autoLogin() {
    if (localStorage.length > 0) {
      const storedCreds = localStorage.getItem(this.storageKey);

      try {
        if (storedCreds) {
          const credentials = JSON.parse(storedCreds);
          this.login(credentials.username, credentials.password);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }


  logout() {
    // remove user from local storage and set current user to null
    // TODO proper logout?
    localStorage.removeItem(this.storageKey);
    delete this.client;
  }
}
