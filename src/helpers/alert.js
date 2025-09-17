import { Alert } from 'react-native';

const alertMessage = () => {
  Alert.alert('Увага', 'Кнопка відпрацювала коректно!', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
};

export default alertMessage;
