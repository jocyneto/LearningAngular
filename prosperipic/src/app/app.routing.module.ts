import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FotoFormComponent } from './fotos/foto-form/foto-form.component';
import { FotoListComponent } from './fotos/foto-list/foto-list.component';
import { MainContentComponent } from './mains/main-content/main-content.component';

// Aqui vai ficar qual componente que será acessado quando passar a requisição pelo link da web;
// Antes de acessar o back-end o Angular vai 'se jogar na frente' e perguntar se é uma rota configurada;
const routes: Routes = [
  { path:'user/:usernameX', component: FotoListComponent},
  { path:'p/add', component: FotoFormComponent},
  { path:'', component: MainContentComponent},
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule{

}
