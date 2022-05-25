import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h2 class="tabPane"> Angular </h2>
  <app-tab></app-tab> 
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ';
}
