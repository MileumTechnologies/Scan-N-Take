import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { RegisterService } from '../../services/register.service';
import { AlertService } from '../../services/alert.service';

@Component({
    selector: 'register-page',
    templateUrl: 'register.page.html'
})
export class RegisterPage {
    static title: string = 'Register';
    private subscription: any = null;

    user: any = {
        fullName: null,
        username: null,
        email: null,
        password: null
    };

    constructor(private alertCtrl: AlertController, private registerService: RegisterService, private navController: NavController, private alertService: AlertService) { }

    //   redirectToLogin() {
    //     // this.routerService.changeRoot('login');
    //     this.navController.push(LoginPage);
    //   }

    register() {
        this.subscription = this.registerService.register(this.user)
            .subscribe((response) => {

                // If error occured during registration
                if (!response.success) {

                    // In case username is already taken
                    if (response.usernameTaken) {
                        let alertData = {
                            title: 'Registration Failed',
                            message: 'Username ' + this.user.username + ' is already taken, please pick a different username.',
                            buttons: ['Ok']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Registration Failed',
                        //    subTitle: 'Username ' + this.user.username + ' is already taken, please pick a different username.',
                        //    buttons: ['OK']
                        // });
                        // alert.present();
                    }

                    // In case email is already registered
                    else if (response.emailTaken) {
                        let alertData = {
                            title: 'Registration Failed',
                            message: 'User with that email already exists, please pick a different email address.',
                            buttons: ['Ok']                            
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Registration Failed',
                        //    subTitle: 'User with that email already exists, please pick a different email address.',
                        //    buttons: ['OK']
                        // });
                        // alert.present();
                    }

                    // In any other case of error
                    else {
                        let alertData = {
                            title: 'Registration Failed',
                            message: 'There was an error with your registration, please try again and if it fails contact our support. Error: ' + response.error,
                            buttons: ['Ok']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Registration Failed',
                        //    subTitle: 'There was an error with your registration, please try again and if it fails contact our support. Error: ' + response.error,
                        //    buttons: ['OK']
                        // });
                        // alert.present();
                    }

                    // If there was no error
                } else {

                    if (response.emailSent) {
                        let alertData = {
                            title: 'Registration Successful',
                            message: 'You have been successfully registered, a verification email has been sent to ' + this.user.email + '. Please verify your account.',
                            buttons: ['Ok']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Registration Succesfull',
                        //    subTitle: 'You have been succesfully registered, a verification email has been sent to ' + this.user.email + '. Please verify your account.',
                        //    buttons: ['OK']
                        // });
                        // alert.present();

                        //   this.redirectToLogin();
                    }

                    else if (!response.emailSent) {
                        let alertData = {
                            title: 'Registration Successful',
                            message: 'You have been successfully registered, but for some reason verification email failed to send. Please verify your account manually by visiting ' + response.verificationLink + ' or contact support.',
                            buttons: ['Ok']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Registration Successful',
                        //    subTitle: 'You have been succesfully registered, but for some reason verification email failed to send. Please verify your account manually by visiting ' + response.verificationLink + ' or contact support.',
                        //    buttons: ['OK']
                        // });
                        // alert.present();
                    }
                }

                this.subscription.unsubscribe();
            });
    }

    goBack() {
        this.navController.pop();
    }

    validateEmail(email: string) {
        let emailValidationTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailValidationTest.test(email);
    }
}