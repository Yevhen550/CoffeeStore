import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigation/RootNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

export function App() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <RootNavigator />
    </NavigationContainer>
  );
}
