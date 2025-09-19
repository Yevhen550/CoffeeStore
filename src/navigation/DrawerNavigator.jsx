import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ROUTES } from "./routes";
import BottomTabs from "./BottomTabs";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={ROUTES.BOTTOM_TABS} component={BottomTabs} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
