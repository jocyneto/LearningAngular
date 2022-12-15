import { GestorTransferenciaService } from './../../services/gestor-transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  constructor(private service: GestorTransferenciaService) { }

  ngOnInit() {
  }

}
