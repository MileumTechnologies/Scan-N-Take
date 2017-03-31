import { Component } from '@angular/core';
import { MenuDataService } from '../../../services/menu-data.service';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'header-menu',
    templateUrl: 'header-menu.component.html'
})
export class HeaderMenuComponent {
    public headerMenuItems: any[];

    constructor(private menuDataService: MenuDataService, private messageBus: MessageBus) {
        this.menuDataService.getData('header').subscribe(
            (data) => {
                this.headerMenuItems = data;
            }
        );
    }

    public logout(): void {
      localStorage.removeItem('id');
      this.messageBus.emit({ command: 'changeAppRootPage', data: 'welcome' });
    }

}
