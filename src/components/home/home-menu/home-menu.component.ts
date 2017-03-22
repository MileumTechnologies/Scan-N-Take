import { Component } from '@angular/core';
import { HomeMenuItemComponent } from '../home-menu-item/home-menu-item.component';
import { MenuDataService } from '../../../services/menu-data.service';

@Component({
    selector: 'home-menu',
    templateUrl: 'home-menu.component.html'
})
export class HomeMenuComponent {
    public menuItems: HomeMenuItemComponent[];

    constructor(private menuDataService: MenuDataService) {
        console.log('HomeMenu');
        this.menuDataService.getData('home').subscribe(
            (data) => {
                this.menuItems = data;
                console.log('MenuDataService: ', data);
            }
        );
    }
}