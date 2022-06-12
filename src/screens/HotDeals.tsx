import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';
import {useDispatch, useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {HotDealsProduct} from '../components/HotDealsProduct';
import {getHotDealslist} from '../redux/action-creators/productActions';
import {getProductFiltered} from '../utils/products';
import {
  getHotDealsListState,
  getProductListState,
  getTimingListState,
} from '../redux/selectors/selectors';
import {AppDispatch} from '.';
import {ContentContainer} from '../components/ContentContainer';
import { Product } from '../interface/productInterface';

const imageArray = [
  'https://placeimg.com/320/320/tech/grayscale',
  'https://placeimg.com/320/440/tech/grayscale',
  'https://placeimg.com/320/560/tech/grayscale',
];

export const HotDeals = () => {
  

  const dispatch: AppDispatch = useDispatch();

  const {loadingProduct, productList} = useSelector(getProductListState);
  const {loadingTiming, timingList} = useSelector(getTimingListState);
  const {loadinghotDeals, hotDealsList} = useSelector(getHotDealsListState);

  const filterhotDeals = productList.filter(productItem =>
    hotDealsList.some(h => h.productId === productItem.id),
  );
  const filteredProducts = getProductFiltered(filterhotDeals, timingList).map(
    item => ({...item, image: imageArray[Math.floor(Math.random() * 2)]}),
  );

  useEffect(() => {
    dispatch(getHotDealslist());
  }, []);

  const renderData = (item: Product) => <HotDealsProduct data={item} />;

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      
      <ContentContainer loading={loadingProduct && loadingTiming && loadinghotDeals}>
        <MasonryList
          keyExtractor={(_, index) => index.toString()}
          data={filteredProducts}
          renderItem={({item}) => renderData(item)}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
        />
      </ContentContainer>
      <Toast />
    </SafeAreaView>
  );
};
