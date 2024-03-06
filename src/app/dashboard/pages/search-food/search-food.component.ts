import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FoodService } from '../../../services/foodService.service';
import { Meal } from '../../../interfaces/meal.interface';
import { CardMealComponent } from '../../../shared/card-meal/card-meal.component';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { delay } from 'rxjs';
import { NotSearchComponent } from '../../../shared/not-search/not-search.component';
import { InfoErrorComponent } from '../../../shared/info-error/info-error.component';

@Component({
  selector: 'app-search-food',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CardMealComponent,
    SpinnerComponent,
    InfoErrorComponent,
    NotSearchComponent,
  ],
  templateUrl: './search-food.component.html',
  styleUrl: './search-food.component.css'
})
export default class SearchFoodComponent {

  // properties:
  public errosForm: boolean = false;
  public meals!: Meal[]
  public isLoading:boolean = false;
  public notSearch: boolean = false;



  // inyectamos dependecias:
  private formB = inject(FormBuilder);
  private foodService = inject(FoodService)

  // Usaremos formulario reactivos
  // formulario Input:
  public myInputForm: FormGroup = this.formB.group({
    name: [ '', [ Validators.required, Validators.minLength(3)] ]
  });



  // methods

  /**
   * Este metodo es para enviar el valor
   * que recibimos en el formulario
   */
  public onSubmitForm(): void {
    if( this.myInputForm.invalid ){
      // si esta invalido toca todos los errores
      this.handleFormErrors();
      return;
    }

    this.handleLoadingAndDataFetching()



  }

  private handleFormErrors(): void {
      console.log('hay un error en el formulario')
      this.errosForm = true; // aca ponemos que se muestre el error si esta invaliado
      this.myInputForm.markAllAsTouched()
  }

  private handleLoadingAndDataFetching(): void {

    this.isLoading = true;
    this.errosForm = false;

    this.foodService.getMealsByMeals(this.myInputForm.controls['name'].value)
    .pipe(
      delay(1500)
    )
    .subscribe({
      next: ( meals ) => {
        this.meals = meals
      },
      error: ( error ) => {
        console.log('Hay un error!!', error)
        this.errosForm = true
      },
      complete: () => {
        this.isLoading = false;
      }
    })

  }




  /**
   * Este metodo es para ver los errores
   * del campo Input
   * @returns string | null
   */
  public getFieldError(): string | null {

    const error = this.myInputForm.controls['name'].errors || {}
    // Recorremos los errores
    for( const keys of Object.keys(error) ){
      switch( keys ){
        //  y si es requerido o minimo de longitud dira cierto mensahe
        case 'required':
          return 'The Field is required, you cannot submit the field empty'
        case 'minlength':
          return `You need a minimum of ${ error['minlength'].requiredLength} characters to search for the game.`;
        case null :
          return 'Corrige el error por favor'
      }
    }

    return null

  }

}
