import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage, FormsModule, ReactiveFormsModule],
  template: `
        <!-- <img src="/assets/logo.svg" alt="Angular logo" width="320" height="320" /> --> 
        <!-- <img [src]="location_pin_url" alt="Angular logo" width="320" height="320" /> -->
        <!-- <img ngSrc="/assets/logo.svg" alt="Angular logo" width="320" height="320" /> -->
        <img [ngSrc]="home_url" [alt]="home_url_desc" width="320" height="320" />
        <!-- <div class="image-container">
  <img [ngSrc]="home_url" fill />
</div> -->
  <h3>Fill the user details</h3>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
  <label>
    Name
    <input type="text" formControlName="name" />
  </label>
  <label>
    Email
    <input type="email" formControlName="email" />
  </label>
  <button type="submit">Submit</button>
</form>

-------------------------------------------------------
<h3>Profile Form</h3>
<p>Name: {{ profileForm.value.name }}</p>
<p>Email: {{ profileForm.value.email }}</p> 
  `,
  styleUrl: './user.component.css'
})
export class UserComponent {
  location_pin_url = "/assets/location-pin.svg";
  home_url="https://images.pexels.com/photos/58997/pexels-photo-58997.jpeg?auto=compress&cs=tinysrgb&w=320";
  home_url_desc = "this is the description";

  profileForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.email,Validators.required]),
  });


  handleSubmit() {
    alert(
      this.profileForm.value.name + ' | ' + this.profileForm.value.email
    );
  }
}
