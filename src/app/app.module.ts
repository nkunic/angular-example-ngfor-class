import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerListModule } from './customer-list/customer-list.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CustomerListModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
