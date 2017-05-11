import { Component } from '@angular/core';
import { LanguageMenuItemComponent } from '../language-menu-item/language-menu-item.component';
import { MenuDataService } from '../../../services/menu-data.service';

@Component({
    selector: 'language-menu',
    templateUrl: 'language-menu.component.html'
})
export class LanguageMenuComponent {
    public languageItems: LanguageMenuItemComponent[];

    constructor(private menuDataService: MenuDataService) {
        this.menuDataService.getData('language').subscribe(
            (data) => {
                this.languageItems = data;
                console.log('LanguageMenu MenuDataService: ', data);
            }
        );
    }
}