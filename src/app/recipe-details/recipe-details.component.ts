import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { environment } from '../../environments/environment';
import { SavedService } from '../saved/saved.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private savedService: SavedService
  ) { }

  recipe;
  //savedRecipes = this.getSavedRecipes();

  ngOnInit() {

    this.fetchEdamamRecipe()
    .then(res => res.json())
    .then(data => {
       this.recipe = new Recipe(
          encodeURIComponent(data[0].uri),
          data[0].label,
          data[0].ingredientLines,
          data[0].image,
          data[0].healthLabels
        );
        console.log(this.recipe);
    });
  }
// Hämtar ut API från Edamam, kolla dokumentationen,
  fetchEdamamRecipe() {
    const recipeId = this.route.snapshot.paramMap.get('id');
    const resourceURL =  `https://api.edamam.com/search?r=${recipeId}`;
    const appKey = environment.APP_KEY;

    const appId = environment.APP_ID;

    const edamamUrl = `${resourceURL}&app_id=${appId}&app_key=${appKey}`;

    return fetch(edamamUrl);
  

    }

    addRecipe()  {
      this.savedService.saveRecipe(this.recipe);
      return alert('Recipe saved')
    }

    // saveRecipe(recipe) {
    //     const savedRecipes = this.getSavedRecipes();
    //     savedRecipes.recipes.push(recipe);

    //     this.updateLocalStorage(savedRecipes);
    // }

    // updateLocalStorage(recipeList) {
    //   localStorage.setItem('savedRecipes', JSON.stringify(recipeList));

    //   this.savedRecipes = this.getSavedRecipes();
    // }

    // getSavedRecipes() {
    //   if (localStorage.getItem('savedRecipes') === null) {
    //     const savedRecipes = {
    //       title: 'My Saved Recipes',
    //       recipes: []
    //     };

    //     this.updateLocalStorage(savedRecipes);
    //   }
    //   return JSON.parse(localStorage.getItem('savedRecipes'));
    // }
}
