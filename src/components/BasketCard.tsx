import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

import {Product} from '../interface/productInterface';
import {removeFromBasket} from '../redux/action-creators/cartActions';
import {AppDispatch} from '../screens';

interface BasketCardProps {
  data: Product;
  count: number;
}

export const BasketCard = ({data, count}: BasketCardProps) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
        <View style={styles.quantityContainer}>
          <Text style={styles.textCount}>{count}</Text>
        </View>

        <Text style={styles.textName}>{data.name}</Text>
        </View>


        <View style={styles.iconcontainer}>
          <Icon
            name="trash-can"
            size={26}
            color="white"
            onPress={() => dispatch(removeFromBasket(data))}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin:5,
    backgroundColor:'gray',
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius:10
  },
  subContainer:{
      flexDirection:'row',
    alignItems:'center',
  },
  textName: {
    marginLeft: 5,
    fontSize: 15,
    color:'white'
  },
  iconcontainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: 40,
    width: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCount: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
