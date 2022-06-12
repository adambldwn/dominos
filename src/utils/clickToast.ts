import Toast from 'react-native-toast-message';

export const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Tebrikler',
      text2: 'Ürün sepete eklendi 👋'
    });
  }