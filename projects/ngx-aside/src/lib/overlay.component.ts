import {
  Component
} from '@angular/core';

import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';

@Component({
  selector: 'ngx-aside-overlay',
  template: `
        <div class="overlay" [@show]="showStatus"></div>`,
  styles: [`.overlay {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: currentColor;
        opacity: .6;
    }`],
  animations: [
    trigger('show', [
      transition('void => *', [
        style([{ opacity: 0 }]),
        animate(100,
          style([{ opacity: .6 }])
        )
      ])
    ])
  ]
})

export class NgxOverlayComponent {
  public showStatus: boolean;

  constructor() {
    this.showStatus = true;
  }
}
