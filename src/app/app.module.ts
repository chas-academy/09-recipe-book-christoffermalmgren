import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SavedComponent } from './saved/saved.component';
import { SavedService } from './saved/saved.service';
import { Filtered } from './recipes/recipes.pipe';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'recipe/:id', component: RecipeDetailsComponent },
  { path: 'saved', component: SavedComponent }
  ];


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    SavedComponent,
    Filtered
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )],
  providers: [SavedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
