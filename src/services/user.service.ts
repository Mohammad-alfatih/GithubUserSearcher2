import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Profile } from '../model/profile';

@Injectable()
export class UserService {
    private username: string;
    private client_id = '6fc670bd576a7148b08e';
    private client_secret = '52c6a54d51a085c91c69a5328c88c9e7463e65b9';
    private api_url = 'https://api.github.com';

    constructor(private _http: Http) {
        
    }

    setUser(username: string) {
        return this.username = username;
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getUsers() {
        return this._http.get('https://api.github.com/users')
        .map(res => <Profile[]>res.json());
    }

    // nextPage() {
    //     return this._http.get('https')
    // }
}