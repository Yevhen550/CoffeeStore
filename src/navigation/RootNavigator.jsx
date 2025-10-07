import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/Colors";
import MainNavigator from "./DrawerNavigator";
import CustomHeader from "../components/CustomHeader/CustomHeader";
import { ROUTES } from "./routes";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName={ROUTES.DRAWER_NAVIGATOR}
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <RootStack.Screen
        name={ROUTES.DRAWER_NAVIGATOR}
        component={MainNavigator}
        options={{
          headerTintColor: Colors.secondary,
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
