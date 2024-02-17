
import { Injectable, inject } from '@angular/core';
import { ListCategories } from '../interfaces/list-categories.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  // Inyectamos dependencias
  private httpClient = inject(HttpClient);

  constructor() { }

  public getAllCategories(): Observable<ListCategories> {
    return this.httpClient.get<ListCategories>(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  }

}
