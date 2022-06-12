import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import { useSelector } from 'react-redux';
import { BasketCard } from '../components/BasketCard';
import { Product } from '../interface/productInterface';
import { getBasketState } from '../redux/selectors/selectors';

export const Basket = () => {
    
    const basketProduct = useSelector(getBasketState);
    
    const renderData = (item:{count:number,product:Product}) => <BasketCard data={item.product} count={item.count}/>
    
    return(
        <SafeAreaView>
            <View>
                <FlatList
                     keyExtractor = {(_,index) => index.toString()}
                     data={basketProduct}
                     renderItem={({item}) => renderData(item)}
                     showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}