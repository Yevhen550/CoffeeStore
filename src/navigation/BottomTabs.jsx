import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import ProductListScreen from "../screens/ProductListScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Tab.Screen
        name={ROUTES.PRODUCTLIST_SCREEN}
        component={ProductListScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
