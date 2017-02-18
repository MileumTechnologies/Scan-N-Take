import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';

@Component({
  templateUrl: 'login.html',
  styles: [`
    .login {
      width: 100%;
      margin: 0 auto;
      position: relative;
    }

    .login-content {
      width: 80%;
      margin: 0 auto;
    }

    .login ion-input {
      width: 100%;
    }

    .login-button {
      margin-top: 20px;
    }

    .register-link-wrapper {
      width: 100%;
      margin-top: 20px;
      text-align: center;
    }
  `]
})
export class LoginPage {
  loggedIn: boolean = false;
  password: string = null;
  username: string = null;


  constructor( private alertCtrl: AlertController, private router: RouterService) {
    
  }

  attemptToLogIn() {
    let alert = this.alertCtrl.create({
      title: 'Login Attempt',
      subTitle: 'Trying to login as ' + this.username + '.\nPassword: ' + this.password ,
      buttons: ['OK']
    });
    alert.present();
  }

  redirectToRegister() {
    console.log('Redirecting to register page.');
    this.router.goToRegisterPage();
  }
}