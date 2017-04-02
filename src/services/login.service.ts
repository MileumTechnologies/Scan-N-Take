import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Storage } from '@ionic/storage';

@Injectable()
export class LoginService {
  private loginURL: string = 'https://www.lucklycreative.com/api/login/login.php';
  // private logoutURL: string = 'https://www.lucklycreative.com/api/login/logout.php';

  constructor(private http: Http, private storage: Storage) {}
  
  public login(user): Observable<any> {
    let body = JSON.stringify(user);

    return this.http.post(this.loginURL, body)
                    .map((res: any) => {
                      let response = JSON.parse(res._body.substring(res._body.indexOf('{'), res._body.length));
                      localStorage.setItem('user', JSON.stringify(response));
                      return response;
                    });
  }

  public logout(id: number) {
    // let body = JSON.stringify({ id: id });
    this.storage.remove('id');
    location.reload();
	// TODO: Add link to logout.php to track user's logged in time
    // return this.http.post(this.logoutURL, body)
    //                 .map((res: any) => {
    //                   let response = JSON.parse(res._body.substring(res._body.indexOf('{'), res._body.length));
    //                   return response;
    //                 });
  }
}