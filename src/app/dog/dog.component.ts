import { CommonModule, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogBreedsService } from '../dog-breeds.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [FormsModule,CommonModule,UpperCasePipe,LowerCasePipe],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {
  favoriteDogSpieces="";

  //generate cart to add dog item
  cart: String[] = [];
  totalCost: number = 0;
  currency:string = "USD";
  dogBreeds:string="";
  saleBanner:string="Sale Sale Sale";
  date=new Date();
  age:number =4;
  cost:number=15343.343;
  constructor(private dogBreedsService:DogBreedsService){
    this.dogBreeds = this.dogBreedsService.breeds.join("⭐️");;
  }
  addToCart(item:String):void{
    console.log('Adding to cart:', this.favoriteDogSpieces);
    // Add logic to save the favorite dog spieces to the cart
    //add item to cart
    this.cart.push( item);
    //calculate total amount
    this.totalCost += 10; // assuming each dog costs $10

    alert( 'Added to cart:'+item);
  }

  checkout(){
    alert('Checkout successful');
  }


}
