import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "./routes";
import BottomTabs from "./BottomTabs";
import { Settings } from "../screens/SettingsScreen";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={Settings} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
