import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FotosModule } from './fotos/fotos.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FotosModule,
    ErrorsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
