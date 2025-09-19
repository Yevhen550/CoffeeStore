import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="" component={null} />
    </Drawer.Navigator>
  );
};

export default MainNavigator;
