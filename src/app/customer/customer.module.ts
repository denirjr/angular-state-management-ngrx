import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { customerFeatureKey, reducer } from './store/reducer/customer.reducer';

@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent],
  imports: [CommonModule, StoreModule.forFeature(customerFeatureKey, reducer)],
  exports: [CustomerViewComponent, CustomerAddComponent],
})
export class CustomerModule {}
