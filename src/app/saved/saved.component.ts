import { Component, OnInit } from '@angular/core';
import { SavedService } from './saved.service';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.css']
})
export class SavedComponent implements OnInit {

  constructor(private savedService: SavedService) { }

  recipe;
  savedRecipes;

  ngOnInit() {
    this.savedRecipes = this.savedService.getSavedRecipes();

  }

}
