import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "./routes";
import BottomTabs from "./BottomTabs";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={drawerScreenOptions}>
      <Drawer.Screen
        name={ROUTES.BOTTOM_TABS}
        component={BottomTabs}
        options={{ title: "Головна" }}
      />
      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{ title: "Налаштування" }}
      />
    </Drawer.Navigator>
  );
};

const drawerScreenOptions = {
  headerShown: true,
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  drawerStyle: {
    backgroundColor: Colors.primary,
    width: 250,
  },
  drawerActiveTintColor: Colors.secondary,
  drawerInactiveTintColor: Colors.white,
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: "bold",
  },
};

export default MainNavigator;
