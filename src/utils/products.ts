import { Product, TimingItem } from "../services/apiService";

export const getProductFiltered = (products:Product[],responseTiming:TimingItem[]) => {

    const clientTime = "2020-08-04T02:01:01.130Z"

    const filteredProducts = products?.filter((item)=>{
        const productInTiming = responseTiming?.find((t) => t.productId === item.id )
        if(productInTiming){
            let startTime = new Date(productInTiming.startDate);
            let endTime = new Date(productInTiming.endDate);
            if(startTime<new Date(clientTime) && new Date(clientTime)<endTime){
                return true
            }
            return false
        }
        return false
    })
    return filteredProducts
}