import {Injectable, OnDestroy, Signal, signal} from '@angular/core';
import {interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BService implements OnDestroy {
  private count = signal(0);

  countSubscription = interval(50).subscribe(() => {
    this.count.update(count => count + 1);
  });

  constructor() {
    console.log("%cService B created", "color: red; font-size: 48px; font-weight: bold");

  }

  getCount() {
    return this.count as Signal<number>;
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}
