export class Recipe {

  public id: number;
  public name: string;
  public ingredients: string[];
  public  image: string;

constructor(id: number,  name: string, ingredients: string[], image: string) {

  this.id = id;
  this.name = name;
  this.ingredients = ingredients;
  this.image = image;
}


}
