// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { HeaderButton, Text } from "@react-navigation/elements";
// import {
//   createStaticNavigation,
//   StaticParamList,
// } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Image } from "react-native";
// import bell from "../assets/bell.png";
// import newspaper from "../assets/newspaper.png";
// import { Home } from "../screens/Home";
// import Profile from "../screens/ProfileScreen";
// import { Settings } from "../screens/Settings";
// import { Updates } from "../screens/Updates";
// import { NotFound } from "../screens/NotFound";

// const HomeTabs = createBottomTabNavigator({
//   screens: {
//     Home: {
//       screen: Home,
//       options: {
//         title: "Home",
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={newspaper}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//     Menu: {
//       screen: Home,
//       options: {
//         title: "Menu",
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={newspaper}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },

//     Updates: {
//       screen: Updates,
//       options: {
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={bell}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//     Profile: {
//       screen: Home,
//       options: {
//         title: "Profile",
//         tabBarIcon: ({ color, size }) => (
//           <Image
//             source={newspaper}
//             tintColor={color}
//             style={{
//               width: size,
//               height: size,
//             }}
//           />
//         ),
//       },
//     },
//   },
// });

// const RootStack = createNativeStackNavigator({
//   screens: {
//     HomeTabs: {
//       screen: HomeTabs,
//       options: {
//         title: "Головна",
//         headerShown: false,
//       },
//     },
//     Profile: {
//       screen: Profile,
//       options: {
//         title: "Меню",
//       },
//       linking: {
//         path: ":user(@[a-zA-Z0-9-_]+)",
//         parse: {
//           user: (value) => value.replace(/^@/, ""),
//         },
//         stringify: {
//           user: (value) => `@${value}`,
//         },
//       },
//     },
//     Settings: {
//       screen: Settings,
//       options: ({ navigation }) => ({
//         presentation: "modal",
//         headerRight: () => (
//           <HeaderButton onPress={navigation.goBack}>
//             <Text>Close</Text>
//           </HeaderButton>
//         ),
//       }),
//     },
//     NotFound: {
//       screen: NotFound,
//       options: {
//         title: "404",
//       },
//       linking: {
//         path: "*",
//       },
//     },
//   },
// });

// export const Navigation = createStaticNavigation(RootStack);

// type RootStackParamList = StaticParamList<typeof RootStack>;

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@react-native-vector-icons/material-icons";
import ProductListScreen from "../screens/ProductListScreen";
import Colors from "../constants/Colors";
import { ROUTES } from "./routes";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={ROUTES.PRODUCTLIST_SCREEN}
        component={ProductListScreen}
        options={{
          title: "Меню",
          headerTintColor: Colors.secondary,
          headerRight: () => (
            <MaterialIcons name="menu" color={Colors.secondary} size={36} />
          ),
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
