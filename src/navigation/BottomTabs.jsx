import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ROUTES } from "./routes";

import HomeScreen from "../screens/HomeScreen";
import ProductStackNavigator from "./stack/ProductStack";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Colors from "../constants/Colors";
import CartScreen from "../screens/CartScreen";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.white,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: "Головна",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PRODUCT_MENU}
        component={ProductStackNavigator}
        options={{
          tabBarLabel: "Меню",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.FAVORITE}
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Обране",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarLabel: "Профіль",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.CART_SCREEN}
        component={CartScreen}
        options={{
          tabBarLabel: "Корзина",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="opencart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.primary,
    height: 70,
    paddingBottom: 5,
  },
});

export default BottomTabs;
