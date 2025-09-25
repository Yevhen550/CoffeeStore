import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import Toast from "react-native-toast-message";
import { toastConfig } from "./helpers/toastConfig";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    console.log(process.env.EXPO_PUBLIC_MY_KEY);
  });

  return (
    <NavigationContainer>
      <RootNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};
export default App;
