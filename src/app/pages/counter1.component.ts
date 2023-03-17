import {Component, OnDestroy} from '@angular/core';
import {interval} from "rxjs";

@Component({
  selector: 'app-counter1',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navigation></app-navigation>

    <div>{{count}}</div>
  `,
})
export class Counter1Component implements OnDestroy{
  // Take a moment to think about Object-Oriented Programming (OOP).
  // We are now inside the implicit constructor of the Counter1Component class.

  count = 0;

  countSubscription = interval(50).subscribe(() => {
    // console.log("+1");

    this.count += 1;
  });

  ngOnDestroy() {
    this.countSubscription.unsubscribe(); //
  }
}
















