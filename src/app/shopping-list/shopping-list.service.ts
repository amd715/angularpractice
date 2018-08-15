import {Ingredient} from '../shared/ingredients.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Tomatos', 10),
    new Ingredient('Apples', 5)
  ];
  constructor() {
  }
  getIngredients() {
    return this.ingredients;
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
