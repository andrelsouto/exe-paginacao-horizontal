import { Component } from '@angular/core';

@Component({
  selector: 'est-root',
  template: `
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'estacionamento';
}
