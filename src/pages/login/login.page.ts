import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoginService } from '../../services/login.service';
import { RouterService } from '../../services/router.service';
import { AlertService } from '../../services/alert.service';
import { MessageBus } from '../../services/message-bus.service';

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

    constructor(private messageBus: MessageBus, private alertCtrl: AlertController, private storage: Storage, private router: RouterService, private loginService: LoginService, private navController: NavController, private alertService: AlertService) { }

    ngOnInit() {
        console.log(this.navController);
    }

    login() {
        this.subscription = this.loginService.login(this.user)
            .subscribe((response) => {
                if (!response.success) {

                    if (response.incorrectUsername) {
                        let alertData = {
                          title: 'Login Failed',
                          message: 'Username is incorrect.',
                          buttons: ['Ok', 'Cancel']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //     title: 'Login Failed',
                        //     subTitle: 'Can\'t find a user with given username.',
                        //     buttons: ['OK']
                        // });
                        // alert.present();

                    } else if (response.incorrectPassword) {

                      let alertData = {
                        title: 'Login Failed',
                        message: 'Password is incorrect.',
                        buttons: ['OK']
                      };
                      this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //     title: 'Login Failed',
                        //     subTitle: 'Incorrect password.',
                        //     buttons: ['OK']
                        // });
                        // alert.present();

                    } else {
                       let alertData = {
                           title: 'Login Failed',
                           message: 'There was an error while logging you in, please try again and if it fails contact our support.',
                           buttons: ['Ok']
                       };
                       this.alertService.getAlertEmitter().emit(alertData);
                       // let alert = this.alertCtrl.create({
                       //    title: 'Login Failed',
                       //    subTitle: 'There was an error while logging you in, please try again and if it fails contact our support.',
                       //   buttons: ['OK']
                       // });
                       // alert.present();
                    }

                } else {

                    if (response.verified == 1) {
                        let alertData = {
                            title: 'Login Successful',
                            message: 'You have been successfully logged in, Welcome back ' + this.user.username,
                            buttons: ['Ok']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Login Successful',
                        //    subTitle: 'You have been successfully logged in. Welcome back ' + this.user.username,
                        //    buttons: ['Ok']
                        // });
                        // alert.present();

                        localStorage.setItem('id', response.id);
                        this.redirectToHome();
                    } else if (response.verified == 0) {
                        let alertData = {
                            title: 'Verification Required',
                            message: 'You haven\'t verified your account yet. Please verify your account before logging in.',
                            buttons: ['Ok']
                        };
                        this.alertService.getAlertEmitter().emit(alertData);
                        // let alert = this.alertCtrl.create({
                        //    title: 'Verification Required',
                        //    subTitle: 'You haven\'t verified your account yet. Please verify your account before loging in.',
                        //    buttons: ['OK']
                        // });
                        // alert.present();
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
        // this.router.changeRoot('home');
        this.messageBus.emit({ command: 'changeAppRootPage', data: 'home' });
    }

    goBack() {
        this.navController.pop();
    }
}

// rebeka je zakon
