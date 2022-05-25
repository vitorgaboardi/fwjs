import { Component } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
  <button *ngFor = "let tab of content; let i = index" 
  [ngClass]="{'selected' : i === currentTab}"
  (click)="selected(i)
  "  
  >{{ tab.title }} </button>
  <div class="textPane">
    <h2 >{{ content[currentTab].text }}</h2>
</div>
  `,
  styleUrls: ['./tab.component.css'],
})

export class TabComponent {
  // Variaveis
  currentTab = 0;
  content = [
    {
      title: 'Tab 1',
      text: 'Texto da tab 1',
    },
    {
      title: 'Tab 2',
      text: 'Texto da tab 2',
    },
    {
      title: 'Tab 3',
      text: 'Texto da tab 3',
    },
    {
      title: 'Tab 4',
      text: 'Texto da tab 4',
    },
  ];

  // Função para atualizar o número que representa a Tab atual
  selected(optionIndex: number) {
    this.currentTab = optionIndex;
    console.log(this.currentTab);
  }
}
