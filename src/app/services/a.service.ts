import {Injectable, OnDestroy} from '@angular/core';
import {
  BehaviorSubject,
  connect,
  connectable,
  EMPTY,
  interval,
  multicast,
  of,
  publish,
  refCount,
  share,
  Subject
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AService implements OnDestroy {
  count$ = new BehaviorSubject<number>(0);

  intervalSubscription = interval(50).subscribe(() => {
    this.count$.next(this.count$.value + 1);
  });

  constructor() {
    console.log("%Service A created", "color: blue; font-size: 48px; font-weight: bold");
  }

  ngOnDestroy() {
    this.intervalSubscription.unsubscribe();
  }
}
