import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';
import { RouterService } from '../../services/router.service';
import { MessageBus } from '../../services/message-bus.service';

@Component({
    selector: 'welcome-page',
    templateUrl: 'welcome.page.html'
})
export class WelcomePage {

    constructor(private navController: NavController, private routerService: RouterService, private messageBus: MessageBus) { }

    ngAfterViewInit() {
        if (localStorage.getItem('id')) {
            this.messageBus.emit({ command: 'changeAppRootPage', data: 'home' });
        }
    }

    public goToLogin() {
        this.messageBus.emit({ command: 'changeAppPage', data: 'login' });
    }

    public goToRegister() {
        this.messageBus.emit({ command: 'changeAppPage', data: 'register' });
    }
}