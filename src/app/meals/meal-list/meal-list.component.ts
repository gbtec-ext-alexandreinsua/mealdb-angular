import { Component, OnInit } from '@angular/core';
import { IMeal, IRawMeal } from 'src/app/models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css'],
})
export class MealListComponent implements OnInit {
  letters = 'ABCEDFGHIJKLMOPQRSTVWXYZ'.split('');
  meals!: IMeal[];

  constructor(private mealsService: MealService) {}

  ngOnInit(): void {
    this.getMealsByInitial();
  }

  getMealsByInitial(initial = 'A'): void {
    this.mealsService.getMealsByInitial(initial).subscribe((data: any) => {
      this.meals = data.meals?.map((rowMeal: IRawMeal) =>
        this.mealsService.mapRowMeal(rowMeal)
      );
    });
  }
}
