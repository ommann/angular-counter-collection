import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-counter1',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navigation></app-navigation>

    <h1>Counter 1</h1>

    <div>{{count}}</div>
  `,
})
export class Counter1Component implements OnDestroy{
  // Take a moment to think about Object-Oriented Programming (OOP).
  // The lines here are for the implicit (invisible) constructor of the Counter1Component class.

  count = 0;

  countSubscription = interval(50).subscribe(() => {
    // console.log("+1");

    this.count += 1;
  });

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}

// Side-effects are tracked with dirty checker called Zone.js














