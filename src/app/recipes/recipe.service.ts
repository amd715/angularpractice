import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredients.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Paneer Tikka', 'This is a test recipe',
      'https://image.shutterstock.com/z/stock-photo-traditional-vegetarian-curry-paneer-matar-sabji-masala-paneer-butter-masala-indian-cuisine-1026235837.jpg',
      [new Ingredient('Onions', 2), new Ingredient('Paneer', 10)]),
    new Recipe('Chili Chicken', 'This is a test recipe',
      'http://dixiesweetsandrestaurant.ca/wp-content/uploads/2017/07/chilli-chicken.jpg',
      [new Ingredient('Chiken', 1), new Ingredient('Green Chillies', 4)]),
    new Recipe('Pizza', 'This is a test recipe',
      'https://img.grouponcdn.com/deal/nhjcKdKnuawjKX427U9F/GK-2048x1229/v1/c700x420.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Cheez', 1)])
  ];
  constructor() {}

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
