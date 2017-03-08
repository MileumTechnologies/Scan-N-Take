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

// Services
import { RouterService } from '../services/router.service';
import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';

@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        HomePage,
        LoginPage,
        RegisterPage,
        ErrorPage
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
        ErrorPage
    ],
    providers: [
        Storage, RouterService, RegisterService, LoginService,
        { provide: ErrorHandler, useClass: IonicErrorHandler },]
})
export class AppModule { }
