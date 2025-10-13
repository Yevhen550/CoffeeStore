import { ROUTES } from "../../navigation/routes";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import CustomButton from "../CustomButton/CustomButton";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";

export const CustomDrawerContent = (props) => {
  const insets = useSafeAreaInsets();
  const { navigation } = props;
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

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
    <SafeAreaView
      style={[styles.container, { backgroundColor: palette.background }]}
      edges={["top", "left", "right"]}
    >
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.wrapper}>
          <View style={styles.topButtons}>
            <CustomButton
              title="Login"
              onPress={navigateToLogin}
              theme={theme}
            />
            <CustomButton
              title="Registration"
              onPress={navigateToRegistration}
              theme={theme}
            />
          </View>
          <View
            style={[
              styles.bottomButtons,
              { paddingBottom: Math.max(insets.bottom, 20) },
            ]}
          >
            <CustomButton
              title="Profile"
              onPress={navigateToProfile}
              theme={theme}
            />
            <CustomButton title="Home" onPress={navigateToHome} theme={theme} />
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

export default CustomDrawerContent;
