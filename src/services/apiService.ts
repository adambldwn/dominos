import axios from 'axios';
import { GetProductsResponse, GetTimingResponse, hotDealsResponse } from '../interface/productInterface';
import {productList,productTimingsList,hotdealsList} from './endpoints';


const getProductList = async ():Promise<GetProductsResponse |undefined> => {
    try {
        const {data} = await axios.get(productList);
        return data;
      } catch (error) {
       console.log("error",error)
      }
}

const getProductTimingsList = async ():Promise<GetTimingResponse |undefined> => {
    try {
        const {data} = await axios.get(productTimingsList);
        return data;
      } catch (error) {
       console.log("error",error)
      }
}

const getHotdealsList = async ():Promise<hotDealsResponse|undefined> => {
    try {
        const {data} = await axios.get(hotdealsList);
        return data;
      } catch (error) {
       console.log("error",error)
      }
}

export const apiServices = {
    getProductList,
    getProductTimingsList,
    getHotdealsList
  };