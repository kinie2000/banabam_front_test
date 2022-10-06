import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSchoolPageRoutingModule } from './detail-school-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailSchoolPage } from './detail-school.page';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSchoolPageRoutingModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [DetailSchoolPage],
})
export class DetailSchoolPageModule {}
