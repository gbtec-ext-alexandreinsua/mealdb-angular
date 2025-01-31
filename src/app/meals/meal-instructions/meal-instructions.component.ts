import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meal-instructions',
  templateUrl: './meal-instructions.component.html',
  styleUrls: ['./meal-instructions.component.css'],
})
export class MealInstructionsComponent {
  @Input() instructions!: string[];
}
