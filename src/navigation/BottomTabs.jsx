import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { ROUTES } from "./routes";
import ProductListScreen from "../screens/ProductListScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductStackNavigator from "./stack/ProductStack";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen
        name={ROUTES.PRODUCT_STACK}
        component={ProductStackNavigator}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
