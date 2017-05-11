import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';

// Pages
import { WelcomePage } from '../pages/welcome/welcome.page';
import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { HomePage } from '../pages/home/home.page';
import { ErrorPage } from '../pages/error/error.page';
import { HeaderPage } from '../pages/header/header.page';
import { ShoppingPage } from '../pages/shopping/shopping.page';
import { AccountPage } from '../pages/account/account.page';
import { BillingPage } from '../pages/billing/billing.page';
import { LanguagePage } from '../pages/language/language.page';
import { SettingsPage } from '../pages/settings/settings.page';
import { HelpPage } from '../pages/help/help.page';
import { FeedbackPage } from '../pages/feedback/feedback.page';
import { ShoppingCartPage } from '../pages/shopping-cart/shopping-cart.page';
import { BuyListPage } from '../pages/buy-list/buy-list.page';

// Components
import { AlertComponent } from '../pages/alert/alert.page';
import { HomeMenuComponent } from '../components/home/home-menu/home-menu.component';
import { HomeMenuItemComponent } from '../components/home/home-menu-item/home-menu-item.component';
import { HeaderMenuComponent } from '../components/header/header-menu/header-menu.component';
import { HeaderMenuItemComponent } from '../components/header/header-menu-item/header-menu-item.component';
import { ShoppingMenuComponent } from '../components/shopping/shopping-menu/shopping-menu.component';
import { ShoppingMenuItemComponent } from '../components/shopping/shopping-menu-item/shopping-menu-item.component';
import { ShoppingCartListComponent } from '../components/shopping-cart/shopping-cart-list/shopping-cart-list.component';
import { ShoppingCartListItemComponent } from '../components/shopping-cart/shopping-cart-list-item/shopping-cart-list-item.component';
import { ItemScannerComponent } from '../components/item-scanner/item-scanner.component';
import { LanguageMenuComponent } from '../components/language/language-menu/language-menu.component';
import { LanguageMenuItemComponent } from '../components/language/language-menu-item/language-menu-item.component';

// Services
import { RouterService } from '../services/router.service';
import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';
import { AlertService } from '../services/alert.service';
import { MessageBus } from '../services/message-bus.service';
import { MenuDataService } from '../services/menu-data.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ProductDetailsService } from '../services/product-details.service';

@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        HomePage,
        ShoppingPage,
        ShoppingCartPage,
        LoginPage,
        RegisterPage,
        ErrorPage,
        HeaderPage,
        AccountPage,
        AlertComponent,
        HomeMenuComponent,
        HomeMenuItemComponent,
        HeaderMenuComponent,
        HeaderMenuItemComponent,
        ShoppingMenuComponent,
        ShoppingMenuItemComponent,
        BillingPage,
        LanguagePage,
        HelpPage,
        SettingsPage,
        FeedbackPage,
        ShoppingCartListComponent,
        ShoppingCartListItemComponent,
        ItemScannerComponent,
        BuyListPage,
        LanguageMenuComponent,
        LanguageMenuItemComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        WelcomePage,
        HomePage,
        ShoppingPage,
        ShoppingCartPage,
        LoginPage,
        RegisterPage,
        ErrorPage,
        HeaderPage,
        AccountPage,
        AlertComponent,
        HomeMenuComponent,
        HomeMenuItemComponent,
        HeaderMenuComponent,
        HeaderMenuItemComponent,
        ShoppingMenuComponent,
        ShoppingMenuItemComponent,
        BillingPage,
        LanguagePage,
        HelpPage,
        SettingsPage,
        FeedbackPage,
        ShoppingCartListComponent,
        ShoppingCartListItemComponent,
        ItemScannerComponent,
        BuyListPage,
        LanguageMenuComponent,
        LanguageMenuItemComponent
    ],
    providers: [
        Storage, RouterService, RegisterService, LoginService, AlertService, MessageBus, MenuDataService, BarcodeScanner, ProductDetailsService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },]
})
export class AppModule { }
