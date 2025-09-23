import Toast from "react-native-toast-message";

export const errorMessageToast = () => {
  Toast.show({
    type: "error",
    text1: "Увага",
    text2: "Будь ласка, оберіть хоча б один продукт 🍵",
    position: "bottom",
  });
};

export const infoMessageToast = () => {
  Toast.show({
    type: "info",
    text1: "Дякуємо",
    text2: "Ваше замовлення готується 🍵",
    position: "bottom",
  });
};
