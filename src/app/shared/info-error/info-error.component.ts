import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-error',
  standalone: true,
  imports: [],
  templateUrl: './info-error.component.html',
  styleUrl: './info-error.component.css'
})
export class InfoErrorComponent  implements OnInit{

  @Input({
    required: true
  })  public infoError!: string | null

  @Input() public errorForms!: boolean

  ngOnInit(): void {
   if( !this.infoError ) throw new Error('properties infoError is required!.');
   if( !this.errorForms ) throw new Error('properties infoError is required!.');
  }

}
