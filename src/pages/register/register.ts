import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  name: string = null;
  username: string = null;
  email: string = null;
  password: string = null;
  repeatPassword: string = null;
  passwordMatch: boolean = false;

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

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email));
    return re.test(email);
  }
}