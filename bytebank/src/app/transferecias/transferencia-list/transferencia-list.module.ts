import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferenciaListComponent } from './transferencia-list.component';

@NgModule({
  imports:
  [
    CommonModule
  ],
  declarations:
  [
    TransferenciaListComponent
  ],
  exports:
  [
    TransferenciaListComponent
  ]
})
export class TransferenciaListModule { }
