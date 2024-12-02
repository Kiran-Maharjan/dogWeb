import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule],
  // templateUrl: './app.component.html',
  template: `
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
      <a href="/guide">Guide</a>
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
