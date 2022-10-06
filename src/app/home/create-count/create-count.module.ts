import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CreateCountPageRoutingModule } from './create-count-routing.module';
import { CreateCountPage } from './create-count.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateCountPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateCountPage],
})
export class CreateCountPageModule {}
