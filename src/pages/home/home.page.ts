import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { HomeMenuComponent } from '../components/home-menu/home-menu.component';
import { HomeMenuItemComponent } from '../components/home-menu/home-menu-item.component';

import { RouterService } from '../../services/router.service';
@Component({
    selector: 'home-page',
    templateUrl: 'home.page.html'
})
export class HomePage {
    constructor(private routerService: RouterService, private storage: Storage) {}

    logout(): void {
        this.storage.remove('id');
        this.routerService.changeRoot('login');
    }
}