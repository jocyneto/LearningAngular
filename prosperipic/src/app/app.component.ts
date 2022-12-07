import { Component, OnInit } from '@angular/core';
import { FotoService } from './fotos/foto/foto.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  titulo = 'Prosperi PIC';

}
