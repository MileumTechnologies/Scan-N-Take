import { Component } from '@angular/core';
import { App } from 'ionic-angular';

import { MessageBus } from '../../services/message-bus.service';

@Component({
    selector: 'header-page',
    templateUrl: './header.page.html'
})
export class HeaderPage {
    private navCtrl: any;

    constructor(private app: App, private messageBus: MessageBus) { }

    ngAfterViewInit() {
        this.navCtrl = this.app.getRootNav();
    }

    goTo(page: string) {
        this.messageBus.emit({ command: 'lol-i-wtf', data: page });
    }

    goBack() {
        this.navCtrl.pop();
    }

    isRootPage(): boolean {

        if (!this.navCtrl || this.navCtrl._views.length == 1)
            return true;

        return false;
    }

    getPageTitle(): string {
        if (this.navCtrl) {
            return this.navCtrl._views[this.navCtrl._views.length - 1].component.title;
        }

        return '';
    }

    isWelcomePage(): boolean {
        if (!this.navCtrl)
            return false;

        if (this.isRootPage() && this.navCtrl._views[0].component.name === 'WelcomePage')
            return true;

        return false;
    }

    userLoggedIn(): boolean {
        if (localStorage.getItem('id'))
            return true;
        return false;
    }
}
