import { Component, OnInit, inject } from '@angular/core';
import { FoodService } from '../../../services/foodService.service';
import { Category, ListCategories } from '../../../interfaces/list-categories.interfaces';
import CardFoodCategoryComponent from '../../../shared/card-food-category/card-food-category.component';
import { CommonModule } from '@angular/common';
import { delay } from 'rxjs';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [CommonModule, CardFoodCategoryComponent, SpinnerComponent],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export default class ListCategoriesComponent  implements OnInit{

  public allListCategories!: any[]

  private foodService = inject(FoodService);

  ngOnInit(): void {
    this.getListAllFoodCategory();
  }

  public getListAllFoodCategory(): void {
    this.foodService.getAllCategories()
    .pipe(
      delay(1500) // le agrego un delay aproposito para que se vea el spinner
    )
    .subscribe({
      next: (response) => {
        this.allListCategories = response.categories
      },
      error: (error) =>{
        console.log("Hay un error")
      }
    })
  }


}
