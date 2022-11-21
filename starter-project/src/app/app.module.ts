import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { CompexercicioComponent } from './compexercicio/compexercicio.component';

@NgModule({ 
  declarations: [
    AppComponent
    ,ServerComponent, ServersComponent, CompexercicioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
