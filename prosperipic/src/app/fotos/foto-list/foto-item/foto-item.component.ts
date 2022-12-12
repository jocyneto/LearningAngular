import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foto } from '../../foto/foto';

@Component({
  selector: 'app-foto-item',
  templateUrl: './foto-item.component.html',
  styleUrls: ['./foto-item.component.css']
})
export class FotoItemComponent implements OnChanges {
  @Input() fotos: Foto[] = []
  rows = []

  constructor(){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('entrou no on changes')
    if(changes.fotos){
      this.rows = this.groupColumns(this.fotos)
    }
  }

  groupColumns(fotos: Foto[]){
    const newRows = [];

    for (let i = 0; i < fotos.length; i+=3) {
      newRows.push(fotos.slice(i, i+3));
    }

    return newRows;
  }
}
