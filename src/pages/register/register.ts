import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  user: any = {
    name: null,
    username: null,
    email: null,
    password: null,
    repeatPassword: null
  };

  constructor(private alertCtrl: AlertController, private router: RouterService, private registerService: RegisterService) {

  }

  redirectToLogin() {
    this.router.goToLoginPage();
  }

  attemptToRegister() {
    // let alert = this.alertCtrl.create({
    //   title: 'Register Attempt',
    //   subTitle: `
    //     Trying to register user. \n
    //     Name: ` + this.name + `\n
    //     Username: ` + this.username + `\n
    //     Email: ` + this.email + `\n
    //     Password: ` + this.password,
    //   buttons: ['OK']
    // });
    // alert.present();
    console.log(this.user);
    this.registerService.register(this.user)
      .subscribe(response => console.log(response));
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}