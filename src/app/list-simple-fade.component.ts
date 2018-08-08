import {
  Component,
  Input
} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Hero } from './hero.service';

@Component({
  selector: 'app-list-simple-fade',
  template: `
    <div class="list-container">
      <div class="list-item" *ngFor="let hero of heroes"
        [@simpleFadeAnimation]="'in'">
        {{ hero.name }}
      </div>
    </div>
  `,
  styleUrls: ['./list.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    // the trigger name does not matter, but it must match the name of the [@...] attribute in the template.
    trigger('simpleFadeAnimation', [

      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as 
      transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ])
  ]
})
export class ListSimpleFadeComponent {
   @Input() heroes: Hero[];
}
