import React, { useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ThemedHeader = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <SafeAreaView
      edges={["top"]}
      style={[styles.safeArea, { backgroundColor: palette.primary }]}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: palette.primary,
            borderColor: palette.subText,
          },
        ]}
      >
        {children}

        <View style={styles.themeSwitcher}>
          <Ionicons
            name="sunny"
            size={24}
            color={theme === "light" ? palette.secondary : palette.subText}
          />
          <Switch
            value={theme === "dark"}
            onValueChange={toggleTheme}
            trackColor={{
              false: Colors.light.switchTrack,
              true: Colors.dark.switchTrack,
            }}
            thumbColor={
              theme === "dark"
                ? Colors.dark.switchThumb
                : Colors.light.switchThumb
            }
            style={styles.switch}
          />
          <Ionicons
            name="moon"
            size={24}
            color={theme === "dark" ? palette.secondary : palette.subText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    width: "100%",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  themeSwitcher: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  switch: {
    marginHorizontal: 8,
  },
});

export default ThemedHeader;
