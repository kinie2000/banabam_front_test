import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HostService {
  constructor() {}
  gethttps() {
    return 'http://localhost:8000/api/';
  }
}
