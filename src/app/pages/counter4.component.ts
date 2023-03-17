import {Component, signal} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-counter4',
  template: `
    <app-navigation></app-navigation>

    <div>{{count}}</div>
  `,
})
export class Counter4Component {
  count = signal(0)

  constructor() {
    interval(50).subscribe(() => {
      this.count.update(count => count + 1);
    });
  }
}
