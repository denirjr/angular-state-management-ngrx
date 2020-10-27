import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

export const addCustomer = createAction(
  '[Customer] Load Customers',
  (customer: Customer) => ({ customer })
);

