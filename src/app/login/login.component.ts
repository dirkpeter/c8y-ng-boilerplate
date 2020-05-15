import { Component, Input } from '@angular/core';
import { CumulocityService } from '../_services';
import { environment } from './../../environments/environment';

// TODO set types

@Component({
  selector: 'app-c8y-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() name: string;

  model = {
    user: '',
    password: ''
  };
  formDisabled = false;

  constructor(public Cumulocity: CumulocityService) {
    this.model = { ... this.model, ... environment.auth};
  }

  login() {
    this.formDisabled = true;
    this.Cumulocity.login(this.model.user, this.model.password);
  }
}
