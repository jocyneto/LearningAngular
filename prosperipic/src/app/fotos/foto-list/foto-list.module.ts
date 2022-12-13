import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FotoModule } from './../foto/foto.module';
import { filterByDescription } from './filter-by-description.pipe';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FotoItemComponent } from './foto-item/foto-item.component';
import { FotoListComponent } from './foto-list.component';
import { SearchComponent } from './search/search.component';
import { CardModule } from './../../shared/components/card/card.module';


@NgModule
({
    declarations:
    [
        FotoListComponent,
        FotoItemComponent,
        LoadButtonComponent,
        filterByDescription,
        SearchComponent
    ],
    imports:
    [
        CommonModule,
        FotoModule,
        CardModule,
        DarkenOnHoverModule
    ]
})
export class FotoListModule
{

}
