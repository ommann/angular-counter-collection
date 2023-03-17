import {ChangeDetectionStrategy, Component} from '@angular/core';
import {interval, map} from 'rxjs';

@Component({
  selector: 'app-counter2',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navigation></app-navigation>

    <div>{{hours$   | async}}</div>
    <div>{{minutes$ | async}}</div>
    <div>{{seconds$ | async}}</div>
  `,
})
export class Counter2Component {
  count$ = interval(50);

  hours$ = this.count$.pipe(
    map((count) => Math.floor(count / 3600)),
  );

  minutes$ = this.count$.pipe(
    map((count) => Math.floor(count / 60) % 60),
  );

  seconds$ = this.count$.pipe(
    map((count) => count % 60),
  );

}
