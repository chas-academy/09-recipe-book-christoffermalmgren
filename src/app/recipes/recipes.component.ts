import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe: Recipe = {

    id: 1,
    name: 'Carbonara'
  };

  constructor() { }

  ngOnInit() {
  }

}
