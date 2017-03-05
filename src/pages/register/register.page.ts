import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'register-page',
  templateUrl: 'register.page.html'
})
export class RegisterPage {
  private subscription: any = null;

  user: any = {
    name: null,
    surname: null,
    username: null,
    email: null,
    password: null,
    repeatPassword: null
  };

  constructor(private alertCtrl: AlertController, private routerService: RouterService, private registerService: RegisterService) { }

  redirectToLogin() {
    this.routerService.changeRoot('login');
  }

  register() {
    this.subscription = this.registerService.register(this.user)
      .subscribe((response) => {

        // If error occured during registration
        if(!response.success) {

          // In case username is already taken
          if(response.usernameTaken) {
            let alert = this.alertCtrl.create({
              title: 'Registration Failed',
              subTitle: 'Username ' + this.user.username + ' is already taken, please pick a different username.',
              buttons: ['OK']
            });
            alert.present();
          }

          // In case email is already registered
          else if(response.emailTaken) {
            let alert = this.alertCtrl.create({
              title: 'Registration Failed',
              subTitle: 'User with that email already exists, please pick a different email address.',
              buttons: ['OK']
            });
            alert.present();
          }

          // In any other case of error
          else {
            let alert = this.alertCtrl.create({
              title: 'Registration Failed',
              subTitle: 'There was an error with your registration, please try again and if it fails contact our support. Error: ' + response.error,
              buttons: ['OK']
            });
            alert.present();
          }

        // If there was no error
        } else {
			
			if(response.emailSent) {
			  let alert = this.alertCtrl.create({
				title: 'Registration Succesfull',
				subTitle: 'You have been succesfully registered, a verification email has been sent to ' + this.user.email + '. Please verify your account.',
				buttons: ['OK']
			  });
			  alert.present();

			  this.redirectToLogin();
			}
			
			else if(!response.emailSent) {
			let alert = this.alertCtrl.create({
				title: 'Registration Succesfull',
				subTitle: 'You have been succesfully registered, but for some reason verification email failed to send. Please verify your account manually by visiting ' + response.verificationLink + ' or contact support.',
				buttons: ['OK']
			  });
			  alert.present();
			}
        }

        this.subscription.unsubscribe();
      });
  }

  validateEmail(email: string) {
    let emailValidationTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailValidationTest.test(email);
  }
}