import { Assets as NavigationAssets } from "@react-navigation/elements";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { Asset } from "expo-asset";
import { createURL } from "expo-linking";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { useColorScheme } from "react-native";
import RootNavigator, { Navigation } from "./navigation/RootNavigator";
import DrawerNavigator from "./navigation/DrawerNavigator";

// Asset.loadAsync([
//   ...NavigationAssets,
//   require("./assets/newspaper.png"),
//   require("./assets/bell.png"),
// ]);

// SplashScreen.preventAutoHideAsync();

// const prefix = createURL("/");

export function App() {
  const colorScheme = useColorScheme();

  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <RootNavigator />
    </NavigationContainer>
  );
  // <Navigation
  //   theme={theme}
  //   linking={{
  //     enabled: "auto",
  //     prefixes: [prefix],
  //   }}
  //   onReady={() => {
  //     SplashScreen.hideAsync();
  //   }}
  // />
}
