import { Component } from '@angular/core';
import { ShoppingMenuComponent } from '../../components/shopping/shopping-menu/shopping-menu.component';

@Component({
    selector: 'shopping-page',
    templateUrl: 'shopping.page.html'
})
export class ShoppingPage {
    static title: string = 'Shopping';

    constructor() {
        console.log('ShoppingPage');
    }
}