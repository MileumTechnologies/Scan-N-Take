import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';

@Component({
  templateUrl: 'register.html',
  styles: [`
    .register {
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    .register-content {
      width: 80%;
      margin: 0 auto;
    }

    .register ion-input {
      width: 100%;
    }

    .register-button {
      margin-top: 20px;
    }

    .register-link-wrapper {
      width: 100%;
      margin-top: 20px;
      text-align: center;
    }
  `]
})
export class RegisterPage {
  name: string = null;
  username: string = null;
  email: string = null;
  password: string = null;

  constructor(private alertCtrl: AlertController, private router: RouterService) {

  }

  redirectToLogin() {
    this.router.goToLoginPage();
  }

  attemptToRegister() {
    let alert = this.alertCtrl.create({
      title: 'Register Attempt',
      subTitle: `
        Trying to register user. \n
        Name: ` + this.name + `\n
        Username: ` + this.username + `\n
        Email: ` + this.email + `\n
        Password: ` + this.password,
      buttons: ['OK']
    });
    alert.present();
  }
}