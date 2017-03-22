import { Component, ViewChild } from '@angular/core';
import { HomeMenuItemComponent } from '../home-menu-item/home-menu-item.component';
import { MenuDataService } from '../../../services/menu-data.service';
import { List } from 'ionic-angular';

@Component({
    selector: 'home-menu',
    templateUrl: 'home-menu.component.html'
})
export class HomeMenuComponent {
    @ViewChild('homeMenu') menu: List;
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
