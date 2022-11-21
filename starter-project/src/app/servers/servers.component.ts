import { Component } from '@angular/core';

@Component({

  selector: 'app-servers', // O mais utilizado, porém existem as duas maneiras abaixo também || Chamada: <app-servers></app-servers>
  //selector: '[app-servers]', // Chamada: <div app-servers></div>
            
  //selector: '.app-servers', // Chamada: <div class="app-servers"></div>

  //templateUrl: './servers.component.html',
  /*
  Outra forma de escrever:
    OBS: Vale ressaltar que não é aconselhavem utilizar o template se você tiver mais que três linhas.
  */
  template:`
    <app-server></app-server>
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

}
