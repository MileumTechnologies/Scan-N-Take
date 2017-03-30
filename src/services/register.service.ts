import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class RegisterService {
  private registerURL: string = 'https://www.lucklycreative.com/api/register/register.php';

  constructor(private http: Http) {}

  public register(user): Observable<any> {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post(this.registerURL, body)
                    .map((res: any) => {
                      let response = JSON.parse(res._body.substring(res._body.indexOf('{'), res._body.length));
                      return response;
                    });
                    // .catch((error: any) => console.log(error.json().error || 'Server error.')); // Uncomment in deploy version
  }

}