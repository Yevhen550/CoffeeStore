import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import Toast from "react-native-toast-message";
import { toastConfig } from "./helpers/toastConfig";

const App = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};
export default App;
