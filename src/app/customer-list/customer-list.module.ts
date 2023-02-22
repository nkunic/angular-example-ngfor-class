import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CustomerListComponent],
  exports: [CustomerListComponent],
})
export class CustomerListModule {}
