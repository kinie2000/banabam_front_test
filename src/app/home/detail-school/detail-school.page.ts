import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { interfaceSchool } from '../interfaceSchool';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detail-school',
  templateUrl: './detail-school.page.html',
  styleUrls: ['./detail-school.page.scss'],
})
export class DetailSchoolPage implements OnInit {
  public code: any;
  public schoolIN: any;
  public mesVoitures: interfaceSchool;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private activetedRoute: ActivatedRoute,
    private storage: Storage
  ) {}

  async ngOnInit() {
    //on verifie si un utilisateur est connecté avant d'afficher la page
    await this.storage.create();
    const storageAuth = await this.storage.get('name');
    if (storageAuth) {
      console.log('je suis là');
      console.log(storageAuth);
    }
    else
    {
      this.router.navigate(['home/login']);
    }

    this.code = this.activetedRoute.snapshot.queryParamMap.get('code');
    this.authService.find(this.code).subscribe((data: interfaceSchool) => {
      console.log(data);
      this.mesVoitures = data;
    });
  }
   public logout() {
    this.router.navigate(['home/logout']);
  }
}
