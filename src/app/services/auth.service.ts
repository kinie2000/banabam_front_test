/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostService } from './host.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor(private http: HttpClient, private gethost: HostService) {}

  index() {
    return this.http.get(this.gethost.gethttps() + 'index');
  }
  create(val) {
    return this.http.post(this.gethost.gethttps() + 'create_use', val);
  }
  login(val) {
    return this.http.post(this.gethost.gethttps() + 'login', val);
  }
  find(val) {
    const obj = {
      val,
    };
    return this.http.post(this.gethost.gethttps() + 'find', obj);
  }
  searchSchool(val) {
    const obj = {
      val,
    };
    console.log(obj);
    return this.http.post(this.gethost.gethttps() + 'searchSchool', obj);
  }
  isAuthenticated() {
    return this.isLoggedIn;
  }
}
