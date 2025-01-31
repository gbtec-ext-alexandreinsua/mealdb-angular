import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealInstructionsComponent } from './meal-instructions.component';

describe('MealInstructionsComponent', () => {
  let component: MealInstructionsComponent;
  let fixture: ComponentFixture<MealInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealInstructionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MealInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
