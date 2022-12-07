import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FotoService } from '../foto/foto.service';

@Component({
  selector: 'app-foto-list',
  templateUrl: './foto-list.component.html',
  styleUrls: ['./foto-list.component.css']
})
export class FotoListComponent implements OnInit {
  listaFotos = [
    {url: 'https://love.doghero.com.br/wp-content/uploads/2016/11/Labrador-6.jpg', descricao: 'Labrador Feliz'},
    {url: 'https://webcachorros.com.br/wp-content/uploads/2013/12/WhatsApp-Image-2020-09-22-at-17.35.30.jpeg', descricao: 'Labrador besta'}
  ]

  listaFotosAPI: any[] = []


  constructor(private fotoService: FotoService, private activatedRoute: ActivatedRoute){
  }

  ngOnInit() {

    const usuarioX = this.activatedRoute.snapshot.params.usernameX
    this.fotoService
                    .listFromUser(usuarioX)
                    .subscribe(i => {
                      //console.log(i);
                      this.listaFotosAPI = i;
                    });
  }
}
