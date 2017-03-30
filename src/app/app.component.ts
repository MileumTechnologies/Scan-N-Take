import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

// Pages
import { WelcomePage } from '../pages/welcome/welcome.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { HomePage } from '../pages/home/home.page';
import { ErrorPage } from '../pages/error/error.page';
import { ShoppingPage } from '../pages/shopping/shopping.page';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart.page';
import { AccountPage } from '../pages/account/account.page';
import { BillingPage } from '../pages/billing/billing.page';
import { LanguagePage } from '../pages/language/language.page';
import { SettingsPage } from '../pages/settings/settings.page';
import { HelpPage } from '../pages/help/help.page';
import { FeedbackPage } from '../pages/feedback/feedback.page'
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart.page';

// Components

// Services
import { MessageBus } from '../services/message-bus.service';
import { RouterService } from '../services/router.service';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild('nav') nav: NavController
    rootPage: any = ShoppingCartPage;

    constructor(platform: Platform, private routerService: RouterService, private storage: Storage, private messageBus: MessageBus) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }

    ngOnInit() {
        // Change root page subscription
        // this.routerService.getChangeRootEmitter().subscribe(
        //     newRootPage => this.changeAppRootPage(newRootPage)
        // );
        this.messageBus.subscribe(
            (message) => {
                if(message.command === 'changeAppRootPage') {
                    this.changeAppRootPage(message.data);
                }
                else if(message.command === 'changeAppPage') {
                    this.changeAppPage(message.data);
                }
                else if(message.command === 'logout') {
                    this.logout();
                }
                console.log('Message received: ', message);
            }
        )
    }

    ngOnDestroy() {
        this.routerService.getChangeRootEmitter().unsubscribe();
    }

    private changeAppRootPage(newRootPage: string): void {

        switch (newRootPage) {
            case 'login': {
                this.rootPage = LoginPage;
                break;
            }
            case 'register': {
                this.rootPage = RegisterPage;
                break;
            }
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

    private changeAppPage(newPage: string): void {

        switch(newPage) {
            case 'login': {
                this.nav.push(LoginPage);
                break;
            }
            case 'register': {
                this.nav.push(RegisterPage);
                break;
            }
            case 'shopping': {
                this.nav.push(ShoppingPage);
                break;
            }
            case 'account': {
                this.nav.push(AccountPage);
                break;
            }
            case 'billing': {
                this.nav.push(BillingPage);
                break;
            }
            case 'language': {
                this.nav.push(LanguagePage);
                break;
            }
            case 'settings': {
                this.nav.push(SettingsPage);
                break;
            }
            case 'help': {
                this.nav.push(HelpPage);
                break;
            }
            case 'feedback': {
                this.nav.push(FeedbackPage);
                break;
            }
            case 'shopping-cart': {
              this.nav.push(ShoppingCartPage);
              break;
            }
        }
    }

    logout() {
        localStorage.removeItem('id');
        this.changeAppRootPage('welcome');
    }
}
