import React from 'react';
import {ActivityIndicator, View,StyleSheet} from 'react-native';


export const CustomActivityIndicator = () => {
  
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#272F4A" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});