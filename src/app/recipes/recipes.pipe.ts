import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../recipe';

@Pipe({ name: 'filtered' })
export class Filtered implements PipeTransform {
    transform(recipes: Recipe[], filteredBy: string) : Recipe[] {
        if (!recipes || filteredBy === 'All') {
            return recipes;
        }
        return recipes.filter(recipe => recipe.healthLabels.indexOf(filteredBy) !== -1);
    }
}
