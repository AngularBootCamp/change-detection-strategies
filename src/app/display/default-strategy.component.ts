import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';

import { Item } from '../item/item-types';

@Component({
  selector: 'default-strategy',
  templateUrl: './default-strategy.component.html'
  // changeDetection: ChangeDetectionStrategy.Default
})
export class DefaultStrategyComponent implements OnChanges, DoCheck {
  @Input() items: Item[] = [];
  @Output() toggleItem = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('Default Strategy - ngOnChanges', changes);
  }

  ngDoCheck() {
    console.log('Default Strategy - ngDoCheck');
  }
}
