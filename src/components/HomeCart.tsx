import React from 'react';
import {SafeAreaView, View,Text,ImageBackground,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';

import { Product } from '../interface/productInterface';
import { addToBasket } from '../redux/action-creators/cartActions';
import { AppDispatch } from '../screens';
import { showToast } from '../utils/clickToast';



interface HomeProductProps {
    data : Product
}

export const HomeCart = ({data}:HomeProductProps) => {
    const dispatch : AppDispatch = useDispatch();
    return(
        <SafeAreaView style={{backgroundColor:'white'}}>
            <View style={styles.container}>
                <ImageBackground
                    source={{uri:data.image}}
                    style={styles.image}
                    imageStyle={styles.imageStyle}
                >
                    <View style={styles.iconcontainer}>
                        <Icon
                          name="basket-plus-outline"
                          size={26}
                          color="white"
                          onPress={() =>{
                              dispatch(addToBasket(data))
                              showToast()
                            }}
                        />
                    </View>
                    
                </ImageBackground>
                <View style={styles.subContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.textDiscount}>{Math.floor(Math.random() * 99) + 1}%</Text>
                        <Text style={styles.textName}>{data.name}</Text>
                    </View>
                        <Text style={styles.textPrice}>${data.price}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 14,
    },
    image:{
        width: '100%',
        aspectRatio: 2,
        marginBottom:8,
    },
    imageStyle:{
        borderRadius:10,
    },
    subContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:4
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    textPrice: {
        fontWeight:'bold',
        fontSize:15
    },
    textName: {
        marginLeft:5,
        fontSize:15
    },
    textDiscount: {
        fontSize:15
    },
    iconcontainer: {
        position: 'absolute',
        right: 9,
        bottom: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      quantityContainer: {
        position: 'absolute',
        left: 9,
        bottom: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: 40,
        width: 40,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textCount:{
        color:'white',
        fontSize:17,
        fontWeight:'bold'
      }

})

function dispatch(arg0: any): void {
    throw new Error('Function not implemented.');
}
