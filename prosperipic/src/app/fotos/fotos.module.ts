import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { FotoComponent } from './foto/foto.component';
import { FotoListComponent } from './foto-list/foto-list.component';
import { FotoFormComponent } from './foto-form/foto-form.component';
import { FotoItemComponent } from './foto-list/foto-item/foto-item.component';

@NgModule({
  declarations: [
    FotoComponent,
    FotoListComponent,
    FotoFormComponent,
    FotoItemComponent
  ],
  exports: [],
  imports: [HttpClientModule, CommonModule]
})
export class FotosModule{}
