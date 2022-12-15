import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


import { TransferenciaListModule } from './../transferencia-list/transferencia-list.module';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { TransferenciaComponent } from './transferencia.component';

@NgModule
({
    declarations:
    [
        TransferenciaComponent,
        NovaTransferenciaComponent
    ],
    imports:[CommonModule, FormsModule, TransferenciaListModule], exports:[]
})
export class TransferenciaModule
{

}
