import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DogBreedsService {
  breeds=['German Shepherd','Bulldog','Labrador','Golden retriver']
  constructor() { }

  getBreeds(): string[] {
    return this.breeds;
  }
  getBreed(id:number) {
    return this.breeds[id];
  }
}
