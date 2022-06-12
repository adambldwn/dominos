import { HotDealsState, Product, ProductState, TimesState } from "../../interface/productInterface"
import { RootState } from "../reducers/rootReducer"

export const getProductListState = (state:RootState):ProductState => state.products
export const getTimingListState = (state:RootState):TimesState=> state.times
export const getHotDealsListState = (state:RootState):HotDealsState => state.hotDeals
export const getBasketState = (state:any):{count:number,product:Product}[] => state.cart.list