import { Component, Input } from '@angular/core';

@Component({
    selector: 'language-menu-item',
    templateUrl: 'language-menu-item.component.html'
})
export class LanguageMenuItemComponent {
    @Input() itemData: any;

    constructor() {

    }

    
}