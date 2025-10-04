import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import ProductListScreen from "../../screens/ProductListScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen";
import { ROUTES } from "../routes";
import Colors from "../../constants/Colors";
import CartScreen from "../../screens/CartScreen";

const Stack = createNativeStackNavigator();

const ProductStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={ROUTES.PRODUCTLIST_SCREEN}
        component={ProductListScreen}
      />
      <Stack.Screen
        name={ROUTES.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={({ navigation, route }) => ({
          headerShown: true,
          header: () => (
            <View
              style={[
                styles.headerContainer,
                { backgroundColor: Colors.light.background },
              ]}
            >
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.backText}>← Back</Text>
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  backText: {
    fontSize: 16,
    color: Colors.light.secondary,
    paddingVertical: 10,
  },
});

export default ProductStackNavigator;
