import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
<section class="listing">
  <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
  <h2 class="listing-heading"> {{housingLocation.name}}</h2>
    <p class="listing-location">{{housingLocation.city}},{{housingLocation.state}}</p>
    <a routerLink="/details">Short Detail</a>
    <a [routerLink]="['/details',housingLocation.id]" routerLinkActive="active">Learn more</a>

</section>
<router-outlet></router-outlet>
  `,
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {

  @Input() housingLocation!:HousingLocation;
}