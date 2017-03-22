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

// Components
import { AlertComponent } from '../pages/alert/alert.page';
import { HomeMenuComponent } from '../components/home/home-menu/home-menu.component';
import { HomeMenuItemComponent } from '../components/home/home-menu-item/home-menu-item.component';

// Services
import { RouterService } from '../services/router.service';
import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';
import { AlertService } from '../services/alert.service';
import { MessageBus } from '../services/message-bus.service';
import { MenuDataService } from '../services/menu-data.service';

@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        HomePage,
        LoginPage,
        RegisterPage,
        ErrorPage,
        HeaderPage,
        AlertComponent,
        HomeMenuComponent,
        HomeMenuItemComponent
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        WelcomePage,
        HomePage,
        LoginPage,
        RegisterPage,
        ErrorPage,
        HeaderPage,
        AlertComponent,
        HomeMenuComponent,
        HomeMenuItemComponent
    ],
    providers: [
        Storage, RouterService, RegisterService, LoginService, AlertService, MessageBus, MenuDataService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },]
})
export class AppModule { }
