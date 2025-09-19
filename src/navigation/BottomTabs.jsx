import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOMESCREEN} component={null} />
      <Tab.Screen name={ROUTES.PRODUCTLIST_SCREEN} component={null} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
