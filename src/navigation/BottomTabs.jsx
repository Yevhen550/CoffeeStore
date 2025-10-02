import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { ROUTES } from "./routes";

import HomeScreen from "../screens/HomeScreen";
import ProductStackNavigator from "./stack/ProductStack";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import CartScreen from "../screens/CartScreen";
import Colors from "../constants/Colors";
import { ThemeContext } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const { theme } = useContext(ThemeContext);
  const currentColors = Colors[theme];

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: currentColors.secondary,
        tabBarInactiveTintColor: currentColors.subText,
        tabBarStyle: [
          styles.tabBar,
          { backgroundColor: currentColors.primary },
        ],
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
    height: 70,
    paddingBottom: 5,
  },
});

export default BottomTabs;
