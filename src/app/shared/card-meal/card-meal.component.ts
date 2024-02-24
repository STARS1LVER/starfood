import { Component, Input, OnInit } from '@angular/core';
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'app-card-meal',
  standalone: true,
  imports: [],
  templateUrl: './card-meal.component.html',
  styleUrl: './card-meal.component.css'
})
export class CardMealComponent implements OnInit{

  @Input() public meal!: Meal

  ngOnInit(): void {
     if(!this.meal) throw new Error('Method not implemented.');
  }



}
