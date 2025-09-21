import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@react-native-vector-icons/material-icons";
import ProductListScreen from "../screens/ProductListScreen";
import Colors from "../constants/Colors";
import { ROUTES } from "./routes";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
import MainNavigator from "./DrawerNavigator";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.DRAWER_NAVIGATOR}
        component={MainNavigator}
        options={{
          title: "Home",
          headerTintColor: Colors.secondary,
          // headerRight: () => (
          //   <MaterialIcons name="menu" color={Colors.secondary} size={36} />
          // ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
