export class Recipe {

  public id: string;
  public name: string;
  public ingredients: string[];
  public  image: string;

constructor(id: string,  name: string, ingredients: string[], image: string) {

  this.id = id;
  this.name = name;
  this.ingredients = ingredients;
  this.image = image;
}


}
