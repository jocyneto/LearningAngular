import { GestorTransferenciaService } from './../../../services/gestor-transferencia.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Transferencia } from 'src/app/models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css'],
})
export class NovaTransferenciaComponent implements OnInit {
  // @Output() onTransferir = new EventEmitter<any>();
  @Input() valor: number;
  @Input() destino: number;

  constructor(private service: GestorTransferenciaService, private rota:Router) {}

  transferir() {
    const novaTransferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    let resultadoObservable = this.service.adicionar(novaTransferencia);

    resultadoObservable.subscribe(
      (transferencia: Transferencia) => {
        console.log(transferencia);
        this.limparTexto();
        this.rota.navigateByUrl('lista');
      },
      (error) => console.log(error)
    );
  }

  limparTexto() {
    this.valor = null;
    this.destino = null;
  }

  ngOnInit() {}
}
