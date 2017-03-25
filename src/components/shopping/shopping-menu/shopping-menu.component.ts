import { Component } from '@angular/core';
import { ShoppingMenuItemComponent } from '../shopping-menu-item/shopping-menu-item.component';
import { MenuDataService } from '../../../services/menu-data.service';

@Component({
    selector: 'shopping-menu',
    templateUrl: 'shopping-menu.component.html'
})
export class ShoppingMenuComponent {
    public shoppingItems: ShoppingMenuItemComponent[];

    constructor(private menuDataService: MenuDataService) {
        this.menuDataService.getData('shopping').subscribe(
            (data) => {
                this.shoppingItems = data;
                console.log('ShoppingMenu MenuDataService: ', data);
            }
        );
    }
}