import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FotoFormModule } from './foto-form/foto-form.module';
import { FotoListModule } from './foto-list/foto-list.module';
import { FotoModule } from './foto/foto.module';


@NgModule({
  declarations: [  ],
  exports: [],
  imports:
  [
    CommonModule,
    FotoModule,
    FotoListModule,
    FotoFormModule
  ]
})
export class FotosModule{}
