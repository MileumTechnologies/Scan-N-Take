import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private subscription: any = null;

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

  register() {
    this.subscription = this.registerService.register(this.user)
      .subscribe((response) => {

        if(response.error) {

          if(response.usernameTaken) {
            let alert = this.alertCtrl.create({
              title: 'Registration Failed',
              subTitle: 'Username ' + this.user.username + ' is already taken, please pick a different username.',
              buttons: ['OK']
            });
            alert.present();
          }

          if(response.emailTaken) {
            let alert = this.alertCtrl.create({
              title: 'Registration Failed',
              subTitle: 'User with that email already exists, please pick a different email address.',
              buttons: ['OK']
            });
            alert.present();
          }

        } else {
          let alert = this.alertCtrl.create({
            title: 'Registration Succesfull',
            subTitle: 'You have been succesfully registered, a verification email has been sent to ' + this.user.email + '. Please verify your account.',
            buttons: ['OK']
          });
          alert.present();

          this.redirectToLogin();
        }
        // 
        // } else if(!response.error && response.registerStatus && response.emailStatus){
        //   let alert = this.alertCtrl.create({
        //     title: 'Registration Succesfull',
        //     subTitle: 'You have been succesfully registered, a verification email has been sent to given email address. Please verify your account.',
        //     buttons: ['OK']
        //   });
        //   alert.present();

        //   this.redirectToLogin();

        // } else if(!response.error && response.registerStatus && !response.emailStatus){
        //   let alert = this.alertCtrl.create({
        //     title: 'Registration Succesfull',
        //     subTitle: 'You have been succesfully registered, but verification email failed to send. Please contact our customer support with your account details.',
        //     buttons: ['OK']
        //   });
        //   alert.present();
        // } else {
        //   let alert = this.alertCtrl.create({
        //     title: 'Registration Failed',
        //     subTitle: 'There has been an unknown error.',
        //     buttons: ['OK']
        //   });
        //   alert.present();
        // }

        this.subscription.unsubscribe();
      });
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}