import { Transferencia } from './../../models/transferencia.model';
import { GestorTransferenciaService } from './../../services/gestor-transferencia.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia-list',
  templateUrl: './transferencia-list.component.html',
  styleUrls: ['./transferencia-list.component.css']
})
export class TransferenciaListComponent implements OnInit {


  transferenciaEventList: any[] = [];

  constructor(private service: GestorTransferenciaService) { }

  ngOnInit() {
    // this.transferenciaEventList = this.service.transferencia;
    this.service.todas()
    .subscribe((listaDeTransf: Transferencia[]) =>{
      console.table(listaDeTransf);
      this.transferenciaEventList = listaDeTransf;
    })
  }

}
