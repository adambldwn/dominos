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
  } from '../redux/action-types/productActions';

export type Product = {
    createdAt: string,
    name: string,
    image: string,
    price: string,
    category: string,
    id: string
};

export type TimingItem = {
    productId: string,
    startDate: string,
    endDate: string
}

export type HotDealsItem = Pick<TimingItem,"productId">

export  type hotDealsResponse = HotDealsItem[];
export  type GetProductsResponse = Product[];
export  type GetTimingResponse = TimingItem[];

interface IProductActionRequestType {
    type: typeof PRODUCT_LIST_REQUEST
}
interface IProductActionRequestFailType {
    type: typeof PRODUCT_LIST_FAIL
}
interface IProductActionSuccessType {
  type: typeof PRODUCT_LIST_SUCCESS
  payload: Product[]
}

interface IHotdealsActionRequestType {
    type: typeof HOTDEALS_LIST_REQUEST
}
interface IHotdealsActionRequestFailType {
    type: typeof HOTDEALS_LIST_FAIL
}
interface IHotdealsActionSuccessType {
  type: typeof HOTDEALS_LIST_SUCCESS
  payload: HotDealsItem[]
}


interface ITimingActionRequestType {
  type: typeof TIMING_LIST_REQUEST
}
interface ITimingActionRequestFailType {
  type: typeof TIMING_LIST_FAIL
}
interface ITimingActionSuccessType {
  type: typeof TIMING_LIST_SUCCESS
  payload: TimingItem[]
}

export type IProductActionTypes = IProductActionRequestType|IProductActionSuccessType|IProductActionRequestFailType
export type ITimingActionTypes = ITimingActionRequestType|ITimingActionSuccessType|ITimingActionRequestFailType
export type IHotDealsActionTypes = IHotdealsActionRequestType|IHotdealsActionRequestFailType|IHotdealsActionSuccessType

export interface ProductState {loadingProduct:boolean,productList:Product[]}
export interface TimesState {loadingTiming:boolean,timingList:TimingItem[]}
export interface HotDealsState {loadinghotDeals:boolean,hotDealsList:HotDealsItem[]}