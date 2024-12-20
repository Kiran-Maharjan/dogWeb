import { HousingLocation } from './../housinglocation';
import { HousingService } from './../housing.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  // templateUrl: './home.component.html',
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city" #filter/>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocationInput]="housingLocation"
      (itemCountEvent)="itemCountIncrease($event)">
      </app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService)
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }
  filterResults(text: String) {
    if (!text) this.filteredLocationList = this.housingLocationList;

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation?.city.toLowerCase().includes(text.toLocaleLowerCase())
    )
  }

  items = new Array();

  itemCountIncrease(item: number) {
    console.log(`Item count increased: ${item}`);
    this.items.push(item);
    console.log(`Current items: ${this.items}`);
  }
}
