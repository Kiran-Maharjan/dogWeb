import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  readonly url = 'http://localhost:3000/locations';
  constructor() { }

  // Fetch all housing locations
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    try {
      const response = await fetch(this.url);
      return (await response.json()) ?? [];
    } catch (error) {
      console.error('Error fetching housing locations:', error);
      return [];
    }
  }
  // Fetch housing location by ID
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    try {
      const response = await fetch(`${this.url}/${id}`);
      return (await response.json()) ?? undefined;
    } catch (error) {
      console.error(`Error fetching housing location with ID ${id}:`, error);
      return undefined;
    }
  }

  // Log application submission
  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
