import { Product } from '../../interface/productInterface';
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET
  } from '../action-types/cartActions';


export interface IBasketType {
  type: typeof ADD_TO_BASKET | typeof REMOVE_FROM_BASKET
  payload: Product
}


export const addToBasket = (payload:Product):IBasketType => {
      return {type: ADD_TO_BASKET,payload}
};

export const removeFromBasket = (payload:Product):IBasketType => {
      return {type: REMOVE_FROM_BASKET,payload}
};

