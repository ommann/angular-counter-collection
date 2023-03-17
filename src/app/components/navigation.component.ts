import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `

    <nav style="display: flex">
      <a routerLink="/counter1">Counter 1</a>
      <a routerLink="/counter2">Counter 2</a>
      <a routerLink="/counter3">Counter 3</a>
      <a routerLink="/counter4">Counter 4</a>
    </nav>

    <style>
      a {
        margin: 0 10px 0 0;
      }

      nav {
        margin: 0 0 10px 0;
      }
    </style>
  `,
})
export class NavigationComponent {}
