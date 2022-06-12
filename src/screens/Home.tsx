import React,{useEffect} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import { HomeCart } from '../components/HomeCart';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import Toast from 'react-native-toast-message';

import { getProductlist,getTiminglist } from '../redux/action-creators/productActions';
import { getProductFiltered } from '../utils/products';
import { ContentContainer } from '../components/ContentContainer';
import { getProductListState, getTimingListState } from '../redux/selectors/selectors';
import { Product } from '../interface/productInterface';

export type AppDispatch = ThunkDispatch<{}, any, AnyAction>; 

export const Home = () => {
    
    const dispatch : AppDispatch = useDispatch();

    const {loadingProduct, productList} = useSelector(getProductListState);
    const {loadingTiming,timingList} = useSelector(getTimingListState);

    const filteredProducts = getProductFiltered(productList,timingList)
    
    useEffect(()=>{
        dispatch(getProductlist())
        dispatch(getTiminglist())
    },[])

    const renderData = (item:Product) => <HomeCart data={item} />
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                
                <ContentContainer loading={loadingProduct && loadingTiming}>
                <FlatList
                        keyExtractor = {(_,index) => index.toString()}
                        data={filteredProducts}
                        renderItem={({item}) => renderData(item)}
                        showsVerticalScrollIndicator={false}
                    />
                </ContentContainer>
            </View>
            <Toast />
        </SafeAreaView>
    )
}