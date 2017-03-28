import { Component } from '@angular/core';
import { HeaderMenuItemComponent } from '../header-menu-item/header-menu-item.component';
import { MenuDataService } from '../../../services/menu-data.service';

@Component({
    selector: 'header-menu',
    templateUrl: 'header-menu.component.html'
})
export class HeaderMenuComponent {
    public headerMenuItems: HeaderMenuItemComponent[];

    constructor(private menuDataService: MenuDataService) {
        this.menuDataService.getData('header').subscribe(
            (data) => {
                this.headerMenuItems = data;
            }
        );
    }
}