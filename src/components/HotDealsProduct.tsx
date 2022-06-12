import React from 'react';
import {View,Text,ImageBackground,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch } from 'react-redux';
import { Product } from '../interface/productInterface';
import { addToBasket } from '../redux/action-creators/cartActions';
import { AppDispatch } from '../screens';
import { showToast } from '../utils/clickToast';

interface HotDealsProduct {
    data : Product
}

export const HotDealsProduct = ({data}:HotDealsProduct) => {
    const dispatch : AppDispatch = useDispatch();
    let ratio;
    if(data.image.indexOf("320/320")>0){
        ratio = 1
    }else if(data.image.indexOf("320/440")>0){
        ratio = 0.72
    }else if(data.image.indexOf("320/440")>0){
        ratio = 0.57
    }
    
    return(
        
            <View style={styles.container}>
               
                    <ImageBackground
                        source={{uri:data.image}}
                        style={[styles.image,{aspectRatio: ratio}]}
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
                        <Text style={styles.textName}>{data.name}</Text>
                    <View style={styles.nameContainer}>
                        <Text style={styles.textPrice}>${data.price}</Text>
                        <Text style={styles.textDiscount}>{Math.floor(Math.random() * 99) + 1}% OFF</Text>
                    </View>
                </View>
            </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginTop:10,
        marginBottom:10,
        marginLeft:10
    },
    image:{
        width: '100%',
        borderRadius:10,
        marginBottom:8,
    },
    imageStyle:{
        borderRadius: 10
    },
    subContainer:{
        flexDirection:'column',
        justifyContent:'space-between',
        paddingHorizontal:4
    },
    nameContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:8
    },
    textPrice: {
        fontWeight:'bold',
        fontSize:12,
        color: '#1e88e5'
    },
    textName: {
        fontSize:13
    },
    textDiscount: {
        fontSize:12,
        marginLeft:8,
        color: '#9e9e9e'
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

})