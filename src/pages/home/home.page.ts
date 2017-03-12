import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

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