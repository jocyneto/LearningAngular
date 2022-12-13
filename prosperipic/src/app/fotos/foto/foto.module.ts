import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FotoComponent } from './foto.component';


@NgModule
({
    declarations:
    [
        FotoComponent
    ],
    imports:
    [
        CommonModule,
        HttpClientModule
    ],
    exports:
    [
        FotoComponent
    ]
})
export class FotoModule
{

}
