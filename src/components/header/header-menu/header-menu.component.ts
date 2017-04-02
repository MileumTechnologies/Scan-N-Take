import { Component } from '@angular/core';
import { MenuDataService } from '../../../services/menu-data.service';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'header-menu',
    templateUrl: 'header-menu.component.html'
})
export class HeaderMenuComponent {
    public headerMenuItems: any[];
    public name: string;

    constructor(private menuDataService: MenuDataService, private messageBus: MessageBus) {
        this.menuDataService.getData('header').subscribe(
            (data) => {
                this.headerMenuItems = data;
            }
        );
        this.name = JSON.parse(localStorage.getItem('user')).name; 
    }

    public logout(): void {
      localStorage.removeItem('id');
      this.messageBus.emit({ command: 'changeAppRootPage', data: 'welcome' });
    }

}
