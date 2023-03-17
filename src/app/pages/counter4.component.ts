import {ChangeDetectionStrategy, Component, computed} from '@angular/core';
import {BService} from "../services/b.service";

@Component({
  selector: 'app-counter4',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navigation></app-navigation>

    <h1>Counter 4</h1>

    <div>{{hours()}}</div>
    <div>{{minutes()}}</div>
    <div>{{seconds()}}</div>
  `,
})
export class Counter4Component {
  count = this.bService.getCount();

  hours   = computed( () => Math.floor(this.count() / 3600)    );
  minutes = computed( () => Math.floor(this.count() / 60) % 60 );
  seconds = computed( () => this.count() % 60                  );

  constructor(private bService: BService) {}
}

// Change Detection wins hiddden inside
