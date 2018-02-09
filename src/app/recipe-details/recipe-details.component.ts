import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  recipe;

  ngOnInit() {



    this.fetchEdamamRecipe()
    .then(res => res.json())
    .then(data => {
       this.recipe = new Recipe(
          encodeURIComponent(data[0].uri),
          data[0].label,
          data[0].ingredientLines,
          data[0].image
        );
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


}
