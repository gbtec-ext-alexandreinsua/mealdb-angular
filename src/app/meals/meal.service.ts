import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IIngredient, IMeal, IRawMeal, IRawMealResponse } from '../models/meal';
import { mealResponseMock } from './meal-response.mock';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  constructor(private http: HttpClient) {}
  BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';

  getMealsByInitial(initial = 'a'): Observable<IRawMealResponse> {
    const url = `${this.BASE_URL}search.php?f=${initial}`;
    return this.http.get<IRawMealResponse>(url);
  }

  getRamdomMeal(): Observable<IRawMealResponse> {
    const url = `${this.BASE_URL}random.php`;
    return this.http.get<IRawMealResponse>(url);
  }

  getMealByIde(id: number): Observable<IRawMealResponse> {
    const url = `${this.BASE_URL}lookup.php?i=${id}`;
    // return this.http.get<IRawMealResponse>(url);
    // muestro la url para verificar que se recibe el parámetro:
    console.log('MealService:getMealById:  ' + url);

    // El operador of de rxjs crea un Observable que emite sincrónamente
    // los argumentos que se le pasan como argumento.
    // Una vez se han emitido todos los valores, se completa el Observable
    // como la respuesta es muy grande la muevo a un fichero aparte
    return of(mealResponseMock);
  }

  mapRowMeal(rMeal: IRawMeal): IMeal {
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
