import { Component } from '@angular/core';

@Component({
  selector: 'app-search-by-letter',
  standalone: true,
  imports: [],
  templateUrl: './search-by-letter.component.html',
  styleUrl: './search-by-letter.component.css'
})
export default class SearchByLetterComponent {

  public abecedarioFood: string[] =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

}
