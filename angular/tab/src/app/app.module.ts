import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabComponent } from './tab.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TabComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
