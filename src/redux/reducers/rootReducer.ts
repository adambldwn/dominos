import {combineReducers} from 'redux';
import { HotDealsState, ProductState, TimesState } from '../../interface/productInterface';
import { cartReducer } from './cartReducer';
import {
    productListReducer,
    timingListReducer,
    hotDealsListReducer
} from './productReducer';

export const rootReducer = combineReducers({
  
  products: productListReducer,
  times: timingListReducer,
  hotDeals:hotDealsListReducer,
  cart: cartReducer,
});


export interface RootState{
  products: ProductState,
  times: TimesState,
  hotDeals:HotDealsState,
  cart: {},
}
