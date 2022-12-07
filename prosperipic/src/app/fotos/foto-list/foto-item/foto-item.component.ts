import { Component, Input } from '@angular/core';
import { Foto } from '../../foto/foto';

@Component({
  selector: 'app-foto-item',
  templateUrl: './foto-item.component.html',
  styleUrls: ['./foto-item.component.css']
})
export class FotoItemComponent {
  @Input() fotos: Foto[] = []

  constructor(){}
}
