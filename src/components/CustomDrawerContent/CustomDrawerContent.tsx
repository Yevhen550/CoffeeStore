import { ROUTES } from "../../navigation/routes";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomButton from "../CustomButton/CustomButton";

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const insets = useSafeAreaInsets();
  const { navigation } = props;

  const navigateToLogin = () => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(ROUTES.AUTH_STACK, {
      screen: ROUTES.LOGIN_SCREEN,
    });
  };

  const navigateToRegistration = () => {
    navigation.closeDrawer();
    navigation.getParent()?.navigate(ROUTES.AUTH_STACK, {
      screen: ROUTES.REGISTRATION,
    });
  };

  const navigateToHome = () => {
    navigation.navigate(ROUTES.BOTTOM_TABS, { screen: ROUTES.HOME });
    navigation.closeDrawer();
  };

  const navigateToProfile = () => {
    navigation.navigate(ROUTES.BOTTOM_TABS, { screen: ROUTES.PROFILE });
    navigation.closeDrawer();
  };

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.wrapper}>
          <View style={styles.topButtons}>
            <CustomButton title="Login" onPress={navigateToLogin} />
            <CustomButton
              title="Registration"
              onPress={navigateToRegistration}
            />
          </View>
          <View
            style={[
              styles.bottomButtons,
              { paddingBottom: Math.max(insets.bottom, 20) },
            ]}
          >
            <CustomButton title="Profile" onPress={navigateToProfile} />
            <CustomButton title="Home" onPress={navigateToHome} />
          </View>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  topButtons: {
    gap: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomButtons: {
    gap: 12,
    paddingHorizontal: 20,
  },
});
