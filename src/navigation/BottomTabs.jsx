import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={null} />
      <Tab.Screen name="SearchStack" component={null} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
