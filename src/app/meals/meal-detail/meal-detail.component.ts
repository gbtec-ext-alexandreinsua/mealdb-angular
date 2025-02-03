import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMeal } from 'src/app/models/meal';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-detail',
  templateUrl: './meal-detail.component.html',
  styleUrls: ['./meal-detail.component.css'],
})
export class MealDetailComponent implements OnInit {
  meal!: IMeal;

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.mealService
      .getMealById(this.route.snapshot.params['id'])
      .subscribe((data: IMeal) => {
        this.meal = data;
      });
  }
}
