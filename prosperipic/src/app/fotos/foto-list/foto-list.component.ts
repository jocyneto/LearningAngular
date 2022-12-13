import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FotoService } from './../foto/foto.service';
import { Foto } from '../foto/foto';


@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  filtroTexto: string = '';
  listaFotosAPI: Foto[] = [];

  hasMore = true;
  currentPage = 1;
  userName = '';

  constructor(private activatedRoute: ActivatedRoute, private fotoService:FotoService){
  }


  onUpdateFiltroTexto(evento: Event){
    this.filtroTexto = (<HTMLInputElement>evento.target).value;
  }

  load(){
    this.fotoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(fotos => {
        this.filtroTexto = '';
        this.listaFotosAPI = this.listaFotosAPI.concat(fotos);
        if(!fotos.length){this.hasMore = false;}
      });

  }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.params.usernameX;
    this.listaFotosAPI = this.activatedRoute.snapshot.data['fotoCarregadas'];
  }
}
