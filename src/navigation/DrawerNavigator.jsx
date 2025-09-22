import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "./routes";
import BottomTabs from "./BottomTabs";
import SettingsScreen from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
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

export default MainNavigator;
