import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { interfaceSchool } from './interfaceSchool';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public mesVoitures: interfaceSchool[];
  filterTerm: string;
  valeur: any;
  erreur: any;
  vide: string;
  constructor(public authService: AuthService, public router: Router) {}

  ngOnInit(): void {
    this.authService.index().subscribe((data: interfaceSchool[]) => {
      console.log(data);
      this.mesVoitures = data;
      console.log(this.mesVoitures);
    });
  }
  public edit(id: number) {
    console.log(id);
    this.router.navigate(['home/detail-school'], {
      queryParams: { code: id },
    });
  }
  public login() {
    this.router.navigate(['home/login']);
  }
 
  recherche(event: any) {
    this.valeur = event.detail.value;
    console.log(this.valeur);
    this.authService.searchSchool(this.valeur).subscribe(
      (data: interfaceSchool[]) => {
        console.log(data);
        this.mesVoitures = data;
 if(this.mesVoitures.length===0)
 {
  this.vide='aucune valeur';
 }
      },
      (error) => {

      }
    );
  }
}
