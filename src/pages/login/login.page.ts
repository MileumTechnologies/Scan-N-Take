import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../../services/login.service';
import { RouterService } from '../../services/router.service';

import { RegisterPage } from '../register/register.page';

@Component({
    selector: 'login-page',
    templateUrl: 'login.page.html'
})
export class LoginPage {
    static title: string = 'Log In';
    private subscription: any = null;

    user: any = {
        password: null,
        username: null
    };

    constructor(private alertCtrl: AlertController, private storage: Storage, private router: RouterService, private loginService: LoginService, private navController: NavController) { }

    ngOnInit() {
        console.log(this.navController);
    }

    login() {
        this.subscription = this.loginService.login(this.user)
            .subscribe((response) => {
                if (!response.success) {

                    if (response.incorrectUsername) {

                        let alert = this.alertCtrl.create({
                            title: 'Login Failed',
                            subTitle: 'Can\'t find a user with given username.',
                            buttons: ['OK']
                        });
                        alert.present();

                    } else if (response.incorrectPassword) {
                        let alert = this.alertCtrl.create({
                            title: 'Login Failed',
                            subTitle: 'Incorrect password.',
                            buttons: ['OK']
                        });
                        alert.present();
                    } else {
                        let alert = this.alertCtrl.create({
                            title: 'Login Failed',
                            subTitle: 'There was an error while logging you in, please try again and if it fails contact our support.',
                            buttons: ['OK']
                        });
                        alert.present();
                    }

                } else {

                    if (response.verified == 1) {
                        let alert = this.alertCtrl.create({
                            title: 'Login Successful',
                            subTitle: 'You have been successfully logged in. Welcome back ' + this.user.username,
                            buttons: ['OK']
                        });
                        alert.present();

                        this.storage.set('id', response.id);
                        this.redirectToHome();
                    } else if (response.verified == 0) {
                        let alert = this.alertCtrl.create({
                            title: 'Verification Required',
                            subTitle: 'You haven\'t verified your account yet. Please verify your account before loging in.',
                            buttons: ['OK']
                        });
                        alert.present();
                    }
                }

                console.log(response);

                this.subscription.unsubscribe();
            });
    }

    // redirectToRegister() {
    //     // console.log('Redirecting to register page.');
    //     // this.router.changeRoot('register');
    //     this.navController.push(RegisterPage);
    // }

    redirectToHome() {
        // console.log('Redirecting to home page.');
        this.router.changeRoot('home');
    }

    goBack() {
        this.navController.pop();
    }
}

// rebeka je zakon

