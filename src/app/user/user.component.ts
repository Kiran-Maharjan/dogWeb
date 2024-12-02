import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage,FormsModule],
  template: `
        <!-- <img src="/assets/logo.svg" alt="Angular logo" width="320" height="320" /> --> 
        <!-- <img [src]="location_pin_url" alt="Angular logo" width="320" height="320" /> -->
        <!-- <img ngSrc="/assets/logo.svg" alt="Angular logo" width="320" height="320" /> -->
        <img [ngSrc]="home_url" [alt]="home_url_desc" width="320" height="320" />
        <!-- <div class="image-container">
  <img [ngSrc]="home_url" fill />
</div> -->
  <h3>Fill the user details</h3>
  <!-- <form> -->
    <label>Name</label>
    <input type="text" [(ngModel)]="name" placeholder="Enter your name"/>
    <label>Email</label>
    <input type="email" [(ngModel)]="email" placeholder="Enter your email"/>
    <button type="submit">Submit</button>
  <!-- </form>   -->
    <p>Name: {{name}}</p>
    <p>Email: {{email}}</p>
 
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
location_pin_url="/assets/location-pin.svg";
home_url="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=400";
home_url_desc="this is the description";

name="";
email="";
}
