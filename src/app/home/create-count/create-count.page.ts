/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-count',
  templateUrl: './create-count.page.html',
  styleUrls: ['./create-count.page.scss'],
})
export class CreateCountPage implements OnInit {
  public registerForm: FormGroup;
  public errorconect: any;
  public remplirform: any;
  constructor(private fb: FormBuilder, public authService: AuthService,public router: Router,) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      prenom: '',
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      tel: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(9),
        ],
      ],
      gender: ['', Validators.required],
    });
  }
  //cette fonction permet de sauvegarder les enregistrement de l'utilisateur dans la base de donnée
  saveData() {
    console.log(this.registerForm.value);
    // on verifie si tous les champ sont bien saisis
    if (this.registerForm.valid) {
      this.authService.create(this.registerForm.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['home']);
        },
        (error) => {
          this.errorconect = 1;
        }
      );
    } else {
      this.remplirform = 1;
    }
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
}
