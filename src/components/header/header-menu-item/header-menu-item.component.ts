import { Component, Input } from '@angular/core';
import { MessageBus } from '../../../services/message-bus.service';

@Component({
    selector: 'header-menu-item',
    templateUrl: 'header-menu-item.component.html'
})
export class HeaderMenuItemComponent {
    @Input() itemData: any;


    constructor(private messageBus: MessageBus) {}

    public goToPage(page: string) {
        if(page === 'logout') return this.logout();
        this.messageBus.emit({ command: 'changeAppPage', data: page });
    }

    public logout(): void {
        setTimeout(() => {
            localStorage.removeItem('user');
            // this.messageBus.emit({ command: 'changeAppRootPage', data: 'welcome' });
            location.reload();
        }, 100);
    }
}
