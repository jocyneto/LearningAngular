import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  //styleUrls: ['./app.component.css']
  /*
  Outro jeito de utilizar o style:
  */
 styles:[`
    h3{
      color: blue;
    }
 `]
})
export class AppComponent {
}
