import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import ProductListScreen from "../../screens/ProductListScreen";
import ProductDetailsScreen from "../../screens/ProductDetailsScreen";
import { ROUTES } from "../routes";

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
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <View style={styles.headerContainer}>
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
    color: "#007AFF",
  },
});

export default ProductStackNavigator;

// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ProductListScreen from "../../screens/ProductListScreen";
// import ProductDetailsScreen from "../../screens/ProductDetailsScreen";
// import { ROUTES } from "../routes";
// import ThemedHeader from "../../components/ThemedHeader/ThemedHeader";

// const Stack = createNativeStackNavigator();

// const ProductStackNavigator = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}
//     >
//       <Stack.Screen
//         name={ROUTES.PRODUCTLIST_SCREEN}
//         component={ProductListScreen}
//       />
//       <Stack.Screen
//         name={ROUTES.PRODUCT_DETAILS}
//         component={ProductDetailsScreen}
//       />
//     </Stack.Navigator>
//   );
// };

// export default ProductStackNavigator;

// import React from "react";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { ROUTES } from "../routes";
// import ProductListScreen from "../../screens/ProductListScreen";
// import ProductDetailsScreen from "../../screens/ProductDetailsScreen";

// const ProductStack = createNativeStackNavigator();

// const ProductStackNavigator = () => {
//   return (
//     <ProductStack.Navigator
//       initialRouteName={ROUTES.PRODUCTLIST_SCREEN}
//       screenOptions={{ headerShown: false }}
//     >
//       <ProductStack.Screen
//         name={ROUTES.PRODUCTLIST_SCREEN}
//         component={ProductListScreen}
//         options={{ title: "Products" }}
//       />
//       <ProductStack.Screen
//         name={ROUTES.PRODUCT_DETAILS}
//         component={ProductDetailsScreen}
//         options={{ title: "Products Details" }}
//       />
//     </ProductStack.Navigator>
//   );
// };

// export default ProductStackNavigator;
