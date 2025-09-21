import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ROUTES } from "../routes";
import ProductListScreen from "../../screens/ProductListScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen";

const ProductStack = createNativeStackNavigator();

const ProductStackNavigator = () => {
  return (
    <ProductStack.Navigator initialRouteName={ROUTES.PRODUCTLIST_SCREEN}>
      <ProductStack.Screen
        name={ROUTES.PRODUCTLIST_SCREEN}
        component={ProductListScreen}
        options={{ title: "Products" }}
      />
      <ProductStack.Screen
        name={ROUTES.PRODUCT_DETAILS}
        component={ProductDetailsScreen}
        options={{ title: "Products Details" }}
      />
    </ProductStack.Navigator>
  );
};

export default ProductStackNavigator;
