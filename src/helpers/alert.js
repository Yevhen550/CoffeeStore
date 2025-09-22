import { Alert } from "react-native";

const alertMessage = () => {
  Alert.alert("Увага", "Спочатку виберіть товар!", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

export default alertMessage;
