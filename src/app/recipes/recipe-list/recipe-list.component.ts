import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Paneer Tikka', 'This is a test recipe',
      'https://image.shutterstock.com/z/stock-photo-traditional-vegetarian-curry-paneer-matar-sabji-masala-paneer-butter-masala-indian-cuisine-1026235837.jpg'),
    new Recipe('Chili chicken', 'This is a test recipe',
      'http://dixiesweetsandrestaurant.ca/wp-content/uploads/2017/07/chilli-chicken.jpg'),
    new Recipe('Pizza', 'This is a test recipe',
      'https://img.grouponcdn.com/deal/nhjcKdKnuawjKX427U9F/GK-2048x1229/v1/c700x420.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
