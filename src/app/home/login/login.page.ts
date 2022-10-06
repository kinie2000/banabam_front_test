/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage-angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public registerForm: FormGroup;
  public errorconect: any;
  public remplirform: any;
  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private storage: Storage
  ) {}

  async ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      tel: ['', Validators.required],
    });
    await this.storage.create();
  }

  saveData() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.authService.login(this.registerForm.value).subscribe(
        async (data) => {
          console.log(data);

          await this.storage.set('name', data);
          console.log(await this.storage.get('name'));

          this.router.navigateByUrl('/home');
        },
        (error) => {
          this.errorconect = 1;
        }
      );
    } else {
      console.log('faux');
      this.remplirform = 1;
    }
  }
  get registerFormControl() {
    return this.registerForm.controls;
  }
  create_acount() {
    this.router.navigateByUrl('/home/create-count');
  }
  back()
  {
    this.router.navigateByUrl('/home');
  }
}
