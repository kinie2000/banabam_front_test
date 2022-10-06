import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(private storage: Storage, public router: Router) {}

  async ngOnInit() {
    await this.storage.create();
    await this.storage.remove('name');
    console.log('vous avez été déconecté');
  }
  home()
  {
    this.router.navigateByUrl('/home/login');
  }
}
