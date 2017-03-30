import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

import { RouterService } from '../../services/router.service';
@Component({
    selector: 'home-page',
    templateUrl: 'home.page.html'
})
export class HomePage {
    static title: string = 'Home';

    constructor(private routerService: RouterService, private storage: Storage) {}
}