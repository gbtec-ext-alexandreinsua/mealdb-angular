import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMeal } from 'src/app/models/meal';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css'],
})
export class MealCardComponent {
  @Input() meal!: IMeal;
  @Input() fullView = false;

  constructor(private router: Router) {}

  navigateToDetail() {
    this.router.navigate(['meal', this.meal.id]);
  }
}
