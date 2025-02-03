import { Component, OnInit } from '@angular/core';
import { MealService } from '../meals/meal.service';
import { IMeal } from '../models/meal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  meal!: IMeal;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.getRamdomMeal().subscribe((data: IMeal) => {
      this.meal = data;
    });
  }
}
