import { Injectable } from '@angular/core';

@Injectable()
export class SavedService {

    constructor() {

    }
    
      saveRecipe(recipe) {
          const savedRecipes = this.getSavedRecipes();
          savedRecipes.recipes.push(recipe);
    
          this.updateLocalStorage(savedRecipes);
      }
    
      updateLocalStorage(recipeList) {
        localStorage.setItem('savedRecipes', JSON.stringify(recipeList));
    }

    getSavedRecipes() {
        if (localStorage.getItem('savedRecipes') === null) {
          const savedRecipes = {
            title: 'My Saved Recipes',
            recipes: []
          };
    
          this.updateLocalStorage(savedRecipes);
        }
        return JSON.parse(localStorage.getItem('savedRecipes'));
      }
}