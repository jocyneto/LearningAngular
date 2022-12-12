import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Foto } from '../foto/foto';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {

  filtroTexto: string = '';
  listaFotosAPI: Foto[] = [];
  debounce: Subject<string> = new Subject<string>();

  /*
  listaFotos = [
    {url: 'https://love.doghero.com.br/wp-content/uploads/2016/11/Labrador-6.jpg', descricao: 'Labrador Feliz'},
    {url: 'https://webcachorros.com.br/wp-content/uploads/2013/12/WhatsApp-Image-2020-09-22-at-17.35.30.jpeg', descricao: 'Labrador besta'}
  ]*/



  constructor(private activatedRoute: ActivatedRoute){
  }

  onUpdateFiltroTexto(evento: Event){
    this.filtroTexto = (<HTMLInputElement>evento.target).value;
  }

  ngOnInit() {
    this.listaFotosAPI = this.activatedRoute.snapshot.data['fotoCarregadas']
    this.debounce.pipe(debounceTime(300)).subscribe(filtro => this.filtroTexto = filtro);
  }
}
