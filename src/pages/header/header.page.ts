import { Component } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
    selector: 'header-page',
    templateUrl: './header.page.html'
})
export class HeaderPage {
    private navCtrl: any;

    constructor(private app: App) { }

    ngAfterViewInit() {
        this.navCtrl = this.app.getRootNav();
        console.log('NavCtrl: ', this.navCtrl);
        console.log('Test: ', this.navCtrl._views[0].component);
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
        if(!this.navCtrl)
            return true;

        if (this.isRootPage() && this.navCtrl._views[0].component.name === 'WelcomePage')
            return true;

        return false;
    }

    userLoggedIn(): boolean {
        return false;
    }
}