import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MenuDataService {
    private homeMenuDataUrl = '../config/menu-items/homeMenuItems.json';
    private shoppingMenuDataUrl = '../config/menu-items/shoppingMenuItems.json';

    constructor(private http: Http) {}

    public getData(forMenu: string): Observable<any> {
        let url;
        switch(forMenu) {
            case 'home':
                url = this.homeMenuDataUrl;
                break;
            case 'shopping':
                url = this.shoppingMenuDataUrl;
                break;
        }

        return this.http.get(url).map((response: any) => JSON.parse(response._body));
    }
}