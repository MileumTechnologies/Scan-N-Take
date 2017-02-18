import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
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