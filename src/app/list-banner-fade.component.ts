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

import { Villain } from './villain.service';

@Component({
  selector: 'app-list-banner-fade',
  template: `
    <div class="list-container">
      <div class="list-item" *ngFor="let villain of villains"
        [@simpleFadeAnimation]="'in'">
        {{ villain.name }}
        <div class="message" [@messageAnimation]="villain.messageState">
          {{ villain.message }}
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./list.component.css'],
  animations: [
   
    
    trigger('simpleFadeAnimation', [

      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
    ]),

    trigger('messageAnimation', [

      state('visible', style({
        opacity: 0.9,
        display: 'block',
      })),

      state('hidden',   style({
        opacity: 0,
        display: 'none',
      })),

      transition('hidden => visible', animate('300ms ease-in')),

      // transition from "visible" to "hidden" similarly
      transition('visible => hidden', animate('1000ms ease-out'))

    ]),

  ]
})
export class ListBannerFadeComponent {
   @Input() villains: Villain[];
}
