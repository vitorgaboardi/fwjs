import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  template: `
  <div> 
    <h1> {{ tabTitle }}</h1>
  </div>
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

export default class TabComponent {

  // Definindo as entradas
  @Input() 
  content!: {title: string, text: string}[];

  @Input()
  tabTitle!: string;

  // Variaveis
  private currentTab = 0;

  // Função para atualizar o número que representa a Tab atual
  selected(optionIndex: number) {
    this.currentTab = optionIndex;
    console.log(this.currentTab);
  }
}
