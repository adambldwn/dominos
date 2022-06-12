import { Product } from '../../interface/productInterface';
import { IBasketType } from '../action-creators/cartActions';
import {
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET
  } from '../action-types/cartActions';

export const cartReducer = (state:{list:{count:number,product:Product}[]} = {list:[]}, action:IBasketType) => {
    switch (action.type) {
      case ADD_TO_BASKET:
        const productIndex= state.list.findIndex(item => item.product.id === action.payload.id)
        if(productIndex<0){
          return {...state,list:[...state.list,{count:1,product:action.payload}]}
        }
        
        let product = state.list[productIndex]
        product = {...product,count:product.count+1}
        const copyList = [...state.list]
        copyList[productIndex] = product
        return {...state,list:copyList}
      case REMOVE_FROM_BASKET:
        const filteredList = state.list.filter(item => item.product.id !== action.payload.id)
        return {...state,list:filteredList};

      default:
        return state;
    }
};
