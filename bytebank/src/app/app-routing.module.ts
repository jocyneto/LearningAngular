import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NovaTransferenciaComponent } from './transferecias/transferencia/nova-transferencia/nova-transferencia.component';
import { TransferenciaListComponent } from './transferecias/transferencia-list/transferencia-list.component';
import { TransferenciaComponent } from './transferecias/transferencia/transferencia.component';

const routes: Routes = [
  { path: '', redirectTo: 'completo', pathMatch: 'full'  },
  { path: 'completo', component: TransferenciaComponent },
  { path: 'lista', component: TransferenciaListComponent },
  { path: 'novaTransferencia', component: NovaTransferenciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
