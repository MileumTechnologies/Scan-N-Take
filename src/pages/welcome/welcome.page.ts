import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RouterService } from '../../services/router.service';
import { MessageBus } from '../../services/message-bus.service';

@Component({
    selector: 'welcome-page',
    templateUrl: 'welcome.page.html'
})
export class WelcomePage implements OnInit {

    constructor(private navController: NavController, private routerService: RouterService, private messageBus: MessageBus) { }

    ngOnInit() {
        if (localStorage.getItem('user')) {
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
