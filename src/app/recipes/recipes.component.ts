import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-recipes',
  styleUrls: ['./recipes.component.css'],
  templateUrl: './recipes.component.html'
})

export class RecipesComponent {

  recipes: Recipe[];
  filteredBy: string = "All";
  query = '';
  constructor() { }

  // ngOnInit kör först och här hämtas reultatet ut i json.
  // data kan egentligen heta vad som.loggar vi data får vi ut data o sen hits o där ligger array
  // med 10st träffar på recipes.

// Hämtar ut API från Edamam, kolla dokumentationen,
  fetchEdamamRecipes() {
    const resourceURL =  `https://api.edamam.com/search?from=1&to=20&q=${this.query}`;
    const appKey = environment.APP_KEY;

    const appId = environment.APP_ID;

    const edamamUrl = `${resourceURL}&app_id=${appId}&app_key=${appKey}`;


    return fetch(edamamUrl);

    }


  onKey(event) {

     if (event.keyCode === 13) {

      this.fetchEdamamRecipes()
      .then(res => res.json())
      .then(data => {
        console.log(data);
        const mappedRecipes = data.hits
          .map(recipe  => new Recipe(
            encodeURIComponent(recipe.recipe.uri),
            recipe.recipe.label,
            recipe.recipe.ingredientLines,
            recipe.recipe.image,
            recipe.recipe.healthLabels
          ));
        this.recipes = mappedRecipes;
      });

    }

  }

  filter(type: string) {
    this.filteredBy = type;
  }
}
