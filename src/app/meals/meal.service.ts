import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IIngredient, IMeal, IRawMeal, IRawMealResponse } from '../models/meal';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

  getMealsByInitial(initial = 'a'): Observable<IMeal[]> {
    const url = `${this.BASE_URL}search.php?f=${initial}`;
    return this.http
      .get<IRawMealResponse>(url)
      .pipe(
        map((response: IRawMealResponse) =>
          response.meals?.map((rawMeal) => this.mapRowMeal(rawMeal))
        )
      );
  }

  getRamdomMeal(): Observable<IMeal> {
    const url = `${this.BASE_URL}random.php`;
    return this.http
      .get<IRawMealResponse>(url)
      .pipe(
        map((response: IRawMealResponse) => this.mapRowMeal(response.meals[0]))
      );
  }

  getMealById(id: number): Observable<IMeal> {
    const url = `${this.BASE_URL}lookup.php?i=${id}`;
    return this.http
      .get<IRawMealResponse>(url)
      .pipe(
        map((Response: IRawMealResponse) => this.mapRowMeal(Response.meals[0]))
      );
  }

  private mapRowMeal(rMeal: IRawMeal): IMeal {
    return {
      id: Number(rMeal.idMeal),
      name: rMeal.strMeal,
      area: rMeal.strArea,
      category: rMeal.strCategory,
      thumb: rMeal.strMealThumb,
      source: rMeal.strSource,
      youtube: rMeal.strYoutube,
      intructions: this.extractInstructions(rMeal),
      tags: this.extractTags(rMeal),
      ingredients: this.extractIngredients(rMeal),
    };
  }

  private extractInstructions(rMeal: IRawMeal): string[] {
    return rMeal.strInstructions
      .split(/(?:\.\s|\r\n|\n)/)
      .filter((instruction: string) => !!instruction);
  }

  private extractTags(rMeal: IRawMeal): string[] {
    return rMeal.strTags?.split(',') ?? [];
  }

  private extractIngredients(rMeal: IRawMeal): IIngredient[] {
    const ingredients: IIngredient[] = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = (rMeal as any)[`strIngredient${i}`];
      const measure = (rMeal as any)[`strMeasure${i}`];

      if (ingredient?.trim()) {
        ingredients.push({
          ingredient: ingredient.trim(),
          measure: measure.trim() ?? '',
        });
      }
    }

    return ingredients;
  }
}
