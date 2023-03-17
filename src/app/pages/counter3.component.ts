import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AService} from "../services/a.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter3',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navigation></app-navigation>

    <h1>Counter 3</h1>

    <div>{{count$ | async}}</div>
  `,
})
export class Counter3Component {
  count$: Observable<number>

  constructor(private counter1Service: AService) {
    this.count$ = counter1Service.count$;
  }
}
