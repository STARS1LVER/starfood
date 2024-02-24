
import { Injectable, inject } from '@angular/core';
import { ListCategories } from '../interfaces/list-categories.interfaces';
import { Observable, map, retry } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Meal, MealT } from '../interfaces/meal.interface';
import { environments } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // Properties:
  private baseUrl: string = environments.baseUrl


  // Inyectamos dependencias
  private httpClient = inject(HttpClient);

  constructor() { }

  /**
   * Este metodo nos retornar categorias de comida
   * @returns Observable<ListCategories>
   */
  public getAllCategories(): Observable<ListCategories> {
    return this.httpClient.get<ListCategories>(`${this.baseUrl}categories.php`)
  }


  /**
   *  Este metodo nos permite traes platos de comida
   *  dependiendo del nombre que le pasemos
   * @param nameMeal
   * @returns
   */
  public getMealsByMeals(nameMeal: string): Observable<Meal[]>{
    return this.httpClient.get<MealT>(`${this.baseUrl}search.php?s=${nameMeal}`)
    .pipe(
      map( resolve => resolve.meals )
    )
  }

}
