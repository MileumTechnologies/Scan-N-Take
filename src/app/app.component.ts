import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { RouterService } from '../services/router.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, private router: RouterService) {
    this.router.getRedirectEmitter().subscribe(
      destination => this.redirect(destination)
    );

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  redirect(destination: string) {
    switch(destination) {
      case 'login':
        this.rootPage = LoginPage;
        break;
      case 'register':
        this.rootPage = RegisterPage;
        break;
      default:
        break;
    }
  }
}
