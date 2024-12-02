import { Component,EventEmitter,Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
<section class="listing">
  <img class="listing-photo" [src]="housingLocationInput.photo" alt="Exterior photo of {{housingLocationInput.name}}">
  <h2 class="listing-heading"> {{housingLocationInput.name}}</h2>
    <p class="listing-location">{{housingLocationInput.city}},{{housingLocationInput.state}}</p>
    <a routerLink="/details">Short Detail</a>
    
    <a [routerLink]="['/details',housingLocationInput.id]" routerLinkActive="active">Learn more</a>
    <button (click)="itemCountIncrease()">Add to wishList</button>

</section>
<router-outlet></router-outlet>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocationInput!:HousingLocation;
  @Output() itemCountEvent=new EventEmitter<number>();
  countValue=0;
itemCountIncrease(){
  console.log('itemCountIncrease');
  this.countValue++;
  this.itemCountEvent.emit(this.countValue);
}
}
