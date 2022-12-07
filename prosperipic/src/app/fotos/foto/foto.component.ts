import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
  @Input() descricao = 'Foto Labrador'
  @Input() url = 'https://www.petlove.com.br/images/breeds/193219/profile/original/labrador-p.jpg?1532539172';
}
