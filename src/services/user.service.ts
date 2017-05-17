import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    private username: string;
    private client_id = '6fc670bd576a7148b08e';
    private client_secret = '52c6a54d51a085c91c69a5328c88c9e7463e65b9';

    constructor(private _http: Http) {
        this.username = 'Mohammad-alfatih';
    }

    setUser(username: string) {
        return this.username = username;
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }
}