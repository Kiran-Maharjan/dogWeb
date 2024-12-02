import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialComponent } from "./tutorial/tutorial.component";
import { UserComponent } from "./user/user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, RouterModule, TutorialComponent, UserComponent],
  // templateUrl: './app.component.html',
  template: `
   <!-- <app-user/> -->
  <!-- <app-tutorial/> -->
  <main>
    <a [routerLink]="['/']">
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" width="100" height="100" />
      </header>
    </a>
  <section class="content">
      <nav>
      <a href="/">Home</a>
      |
      <a href="/dog">Dogs</a>
      |
      <a href="/user">Users</a>
      |
      <a href="/tutorial">Tutorial</a>
    </nav>
      </section>
      <router-outlet></router-outlet>
    </main>
  
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dogWeb';
}
