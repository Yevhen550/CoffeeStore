import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import Toast from "react-native-toast-message";
import { toastConfig } from "./helpers/toastConfig";
import { UserProvider } from "./context/user/userProvider";

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <RootNavigator />
        <Toast config={toastConfig} />
      </NavigationContainer>
    </UserProvider>
  );
};
export default App;
  