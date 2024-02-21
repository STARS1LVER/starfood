import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FoodService } from '../../../services/foodService.service';

@Component({
  selector: 'app-search-food',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './search-food.component.html',
  styleUrl: './search-food.component.css'
})
export default class SearchFoodComponent {

  // properties:
  public errosForm: boolean = false;

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
      console.log('hay un error')
      this.errosForm = true; // aca ponemos que se muestre el error si esta invaliado
      this.myInputForm.markAllAsTouched()

      return

    }
    console.log(this.myInputForm.controls['name'].value)
    this.errosForm = false

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
