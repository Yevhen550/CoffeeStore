import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name={ROUTES.HOME_SCREEN} component={null} /> */}
      <Tab.Screen
        name={ROUTES.PRODUCTLIST_SCREEN}
        component={ProductListScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
