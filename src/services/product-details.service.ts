import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductDetailsService {
    private productDetailsUrl = 'http://lucklycreative.com/api/products/getProductDetails.php';

    constructor(private http: Http){}

    public getProductDetails(productId: string): Observable<any> {
        const body = JSON.stringify({ id: productId });
        return this.http.post(this.productDetailsUrl, body)
                 .map((response: any) => {
                    return JSON.parse(response._body.substring(response._body.indexOf('{'), response._body.length));
                 });
    }

}