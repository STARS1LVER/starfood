import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../interfaces/list-categories.interfaces';
import ListCategoriesComponent from '../../dashboard/pages/list-categories/list-categories.component';
import { TextDescriptionPipe } from '../../pipes/text-description.pipe';

@Component({
  selector: 'app-card-food-category',
  standalone: true,
  imports: [ListCategoriesComponent, TextDescriptionPipe],
  templateUrl: './card-food-category.component.html',
  styleUrl: './card-food-category.component.css'
})
export default class CardFoodCategoryComponent implements OnInit {

  @Input() public allCategoriesList!: Category

  ngOnInit(): void {
    if( !this.allCategoriesList) throw new Error('Property allCategoriesList is required ')

  }

}
