import React from 'react';
import {SafeAreaView, View,Text,TouchableHighlight,StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const CustomHeader = ({title}:{title:string}) => {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Pressable onPress={()=> null}>
                    <Icon name="format-list-bulleted" size={25} color="black" />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingHorizontal: 20,
        paddingVertical: 13,
        backgroundColor:'white',
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    button:{
        
    }
})