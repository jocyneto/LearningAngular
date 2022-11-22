import { Component } from '@angular/core';

@Component({
  selector: 'app-compexercicio',
  templateUrl: './compexercicio.component.html',
  styleUrls: ['./compexercicio.component.css']
})
export class CompexercicioComponent {
  nomeDiretorio   = ``;

  getNomeDiretorio(){
    console.log(this.nomeDiretorio);    
  }

  resetNomeDiretorio(){
    this.nomeDiretorio = ``;
  }


}
