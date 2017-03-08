import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { RouterService } from '../../services/router.service';

@Component({
    selector: 'welcome-page',
    templateUrl: 'welcome.page.html'
})
export class WelcomePage {
    
    constructor(private navController: NavController, private routerService: RouterService) {
        if(localStorage.getItem('loggedIn')) {
            this.routerService.changeRoot('home');
        }
    }

    public goToLogin() {
        this.navController.push(LoginPage);
    }

    public goToRegister() {
        this.navController.push(RegisterPage);
    }
}