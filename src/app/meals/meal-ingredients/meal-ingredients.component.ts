import { Component, Input } from '@angular/core';
import { IIngredient } from 'src/app/models/meal';

@Component({
  selector: 'app-meal-ingredients',
  templateUrl: './meal-ingredients.component.html',
  styleUrls: ['./meal-ingredients.component.css'],
})
export class MealIngredientsComponent {
  @Input() ingredients!: IIngredient[];
}
