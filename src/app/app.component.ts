import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { WelcomePage } from '../pages/welcome/welcome.page';
import { HomePage } from '../pages/home/home.page';
import { ErrorPage } from '../pages/error/error.page';
import { RouterService } from '../services/router.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('nav') nav: NavController
    rootPage: any = WelcomePage;

    constructor(platform: Platform, private routerService: RouterService, private storage: Storage) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    ngOnInit() {
        // Change root page subscription
        this.routerService.getChangeRootEmitter().subscribe(
            newRootPage => this.changeRootPage(newRootPage)
        );
    }

    ngOnDestroy() {
        this.routerService.getChangeRootEmitter().unsubscribe();
    }

    private changeRootPage(newRootPage: string): void {

        switch (newRootPage) {
            // case 'login': {
            //     this.rootPage = LoginPage;
            //     break;
            // }
            // case 'register': {
            //     this.rootPage = RegisterPage;
            //     break;
            // } 
            case 'welcome': {
                this.rootPage = WelcomePage;
                break;
            }
            case 'home': {
                this.rootPage = HomePage;
                break;
            }
            default: {
                this.rootPage = ErrorPage;
            }
        }
    }

    logout() {
        localStorage.removeItem('id');
        this.changeRootPage('welcome');
    }
}
