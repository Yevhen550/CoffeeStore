import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { ROUTES } from "./routes";

import HomeScreen from "../screens/HomeScreen";
import ProductStackNavigator from "./stack/ProductStack";
import SettingsScreen from "../screens/SettingsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#FF914D",
          tabBarInactiveTintColor: "#555",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.PRODUCT_MENU}
        component={ProductStackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#FF914D",
          tabBarInactiveTintColor: "#555",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITE}
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#FF914D",
          tabBarInactiveTintColor: "#555",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          tabBarActiveTintColor: "#FF914D",
          tabBarInactiveTintColor: "#555",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
