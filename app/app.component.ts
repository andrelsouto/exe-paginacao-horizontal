import { Component } from '@angular/core';

@Component({
  selector: 'est-root',
  template: `
    <div class="d-flex">
        <est-menu></est-menu>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'estacionamento';
}
