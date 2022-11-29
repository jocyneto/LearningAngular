import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
    new Recipe('Teste de titulo', 'Teste de descrição', 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2020/11/11/escondidinho-de-frigideira-768x512.jpg'),
    new Recipe('Teste de titulo', 'Teste de descrição', 'https://p2.trrsf.com/image/fget/cf/648/0/images.terra.com/2020/11/11/escondidinho-de-frigideira-768x512.jpg')
  ];


  getName(){
    return this.recipes[0].name
  }

  getDescription(){
    return this.recipes[0].description
  }

  getImgPath(){
    return this.recipes[0].imagePath
  }
  
  ngOnInit(): void {
  }

  

}
