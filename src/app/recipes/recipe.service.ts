import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  constructor(private slService: ShoppingListService) {}
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Pizza',
  //     'very testy',
  //     'https://c.ndtvimg.com/2019-06/go4418h8_garlic-recipes-mushrooms-in-garlic-sauce_625x300_20_June_19.jpg',
  //     [new Ingredient('noodles', 1), new Ingredient('veg kothe', 2)]
  //   ),
  //   new Recipe(
  //     'veg kothe',
  //     'very yummy',
  //     'http://thetastyroom.com/wp-content/uploads/2015/01/veg_kothe2-1024x959.jpg',
  //     [new Ingredient('noodles', 1), new Ingredient('veg kothe', 2)]
  //   ),
  // ];
    private recipes: Recipe[] = [];


   setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
   getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index: number ,newRecipe: Recipe){
    this.recipes[index]= newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
   deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
