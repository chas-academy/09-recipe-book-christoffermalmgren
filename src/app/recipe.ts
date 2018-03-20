export class Recipe {

  public id: string;
  public name: string;
  public ingredients: string[];
  public  image: string;
  public healthLabels: string[];

constructor(id: string,  name: string, ingredients: string[], image: string, healthLabels: string[]) {

  this.id = id;
  this.name = name;
  this.ingredients = ingredients;
  this.image = image;
  this.healthLabels = healthLabels;
}


}
