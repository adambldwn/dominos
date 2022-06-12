import { Dispatch } from 'redux';
import { IHotDealsActionTypes, IProductActionTypes, ITimingActionTypes } from '../../interface/productInterface';

import { apiServices} from '../../services/apiService';
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

export const getProductlist = () => async (dispatch:Dispatch<IProductActionTypes>) => {
    
    try {
      dispatch({type: PRODUCT_LIST_REQUEST});
      const productData = await apiServices.getProductList()
      dispatch({type: PRODUCT_LIST_SUCCESS, payload: productData!});
    } catch (error) {
      dispatch({type: PRODUCT_LIST_FAIL});
    }
};

export const getTiminglist = () => async (dispatch:Dispatch<ITimingActionTypes>) => {
  
  try {
    dispatch({type: TIMING_LIST_REQUEST});
    const timingData = await apiServices.getProductTimingsList()
    dispatch({type: TIMING_LIST_SUCCESS, payload: timingData!});
  } catch (error) {
    dispatch({type: TIMING_LIST_FAIL});
  }
};

export const getHotDealslist = () => async (dispatch:Dispatch<IHotDealsActionTypes>) => {
    
    try {
      dispatch({type: HOTDEALS_LIST_REQUEST});
      const hotDealsData = await apiServices.getHotdealsList()
      dispatch({type: HOTDEALS_LIST_SUCCESS, payload: hotDealsData!});
    } catch (error) {
      dispatch({type: HOTDEALS_LIST_FAIL});
    }
};