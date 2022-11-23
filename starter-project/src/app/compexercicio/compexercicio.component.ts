import { Component } from '@angular/core';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-compexercicio',
  templateUrl: './compexercicio.component.html',
  styleUrls: ['./compexercicio.component.css']
})
export class CompexercicioComponent {
  nomeDiretorio   = ``;
  visPar = true;
  logClicks:string[] = [];
  // logClicks:number[] = [];
  public totalClicks = 0;

  getNomeDiretorio(){
    console.log(this.nomeDiretorio);    
  }

  resetNomeDiretorio(){
    this.nomeDiretorio = ``;
  }

  onChangeVisPar(){
    this.visPar = !this.visPar;
    this.logClicks.push(`Botão foi clicado ${this.totalClicks++} e último clique foi em: ${new Date().getDay()}/${new Date().getMonth()}/${new Date().getFullYear()}`);
    // this.logClicks.push(this.logClicks.length)
  }

}
