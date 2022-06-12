import { IHotDealsActionTypes, IProductActionTypes, ITimingActionTypes } from '../../interface/productInterface';
import {
  PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    TIMING_LIST_REQUEST,
    TIMING_LIST_SUCCESS,
    TIMING_LIST_FAIL,
    HOTDEALS_LIST_REQUEST,
    HOTDEALS_LIST_SUCCESS,
    HOTDEALS_LIST_FAIL
  } from '../action-types/productActions';

export const productListReducer = (state = {loadingProduct:false,productList:[]}, action:IProductActionTypes) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return {...state,loadingProduct: true, productList: []};
      case PRODUCT_LIST_FAIL:
        return {...state,loadingProduct: false, productList: []};
      case PRODUCT_LIST_SUCCESS:
        return {...state,loadingProduct: false, productList: action.payload};
      default:
        return state;
    }
};

export const timingListReducer = (state = {loadingTiming:false,timingList:[]}, action:ITimingActionTypes) => {
    switch (action.type) {
      case TIMING_LIST_REQUEST:
        return {...state,loadingTiming: true, timingList: []};
      case TIMING_LIST_FAIL:
          return {...state,loadingTiming: false, timingList: []};
      case TIMING_LIST_SUCCESS:
        return {...state,loadingTiming: false, timingList: action.payload};
      default:
        return state;
    }
};

export const hotDealsListReducer = (state = {loadinghotDeals:false,hotDealsList:[]}, action:IHotDealsActionTypes) => {
    switch (action.type) {
      case HOTDEALS_LIST_REQUEST:
        return {...state,loadinghotDeals: true, hotDealsList: []};
      case HOTDEALS_LIST_FAIL:
          return {...state,loadinghotDeals: false, hotDealsList: []};
      case HOTDEALS_LIST_SUCCESS:
        return {...state,loadinghotDeals: false, hotDealsList: action.payload};
      default:
        return state;
    }
};