import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {
  private headers: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded', 'charset': 'utf-8' });
  private registerURL: string = 'http://api.lucklycreative.com/register/register.php';

  constructor(private http: Http) {}

  /**
   * register
   */
  public register(user): Observable<any> {
    let body = JSON.stringify(user);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.registerURL, body)
                    .map((res: Response) => res.json());
                    // .catch((error: any) => Observable.throw(error.json().error || 'Server error.'));
  }

}