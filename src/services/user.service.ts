import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Profile } from '../model/profile';

@Injectable()
export class UserService {
    private client_id = '6fc670bd576a7148b08e';
    private client_secret = '52c6a54d51a085c91c69a5328c88c9e7463e65b9';
    private username: string;
    private user: Profile;
    private lastUser = 0;

    constructor(private http: Http) {
        
    }

    setUser(username: string) {
        this.username = username;
        return this.http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => <Profile>res.json()).subscribe(user => { this.user = user; console.log(this.user); return this.user});
    }

    getUserGroup() {
        return this.http.get('http://api.github.com/users?client_id=' + this.client_id + '&client_secret=' + this.client_secret + '&since=' + this.lastUser + '&per_page=10')
        .map(res => <Profile[]>res.json());
    }

    findByUserName(username:string){
        this.username = username;
        return new Promise((resolve, reject) => {
            let url = 'http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret;
            this.http.get(url)
                .map(res => <Profile>res.json())
                .subscribe(res => {
                        resolve(res)
                })
        })
    }

    appendLastUser(id: number) {
        this.lastUser = id;
    }
}