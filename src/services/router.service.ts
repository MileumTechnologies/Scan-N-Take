import { Injectable, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

import { LoginPage } from '../pages/login/login.page';
import { RegisterPage } from '../pages/register/register.page';
import { DashboardPage } from '../pages/dashboard/dashboard.page';
import { UnauthorizedPage } from '../pages/unauthorized/unauthorized.page';

@Injectable()
export class RouterService {
    private changeRootEmitter: EventEmitter<any> = new EventEmitter();

    constructor(private navigationController: NavController) {}

    /** 
     *  @param Name of the page to be redirected to
     *  
     *  Push a new page to the navigation controller stack
     */
    // pushPage(newPage: string): void {

    //     switch(newPage) {

    //     }

    // }

    popPage(): void {
        this.navigationController.pop();
    }

    changeRoot(newPage: string): void {

        switch(newPage) {

            case 'login': {
                this.changeRootEmitter.emit(LoginPage);
                break;
            }

            case 'register': {
                this.changeRootEmitter.emit(RegisterPage);
                break;
            }

            case 'dashboard': {
                this.changeRootEmitter.emit(DashboardPage);
                break;
            }

            default: {
                this.changeRootEmitter.emit(UnauthorizedPage);
            }

        }
    }

    getChangeRootEmitter(): EventEmitter<any> {
        return this.changeRootEmitter;
    }

}