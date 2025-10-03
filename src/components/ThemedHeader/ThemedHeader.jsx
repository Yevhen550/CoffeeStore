import React, { useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

const ThemedHeader = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const styles = getStyles(theme);

  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <View style={styles.container}>
        {children}
        <View style={styles.themeSwitcher}>
          <Ionicons
            name="sunny"
            size={24}
            color={
              theme === "light" ? Colors.light.secondary : Colors.dark.subText
            }
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
            color={
              theme === "dark" ? Colors.dark.secondary : Colors.light.subText
            }
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const getStyles = (theme) =>
  StyleSheet.create({
    safeArea: {
      backgroundColor: Colors[theme].primary,
    },
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: "#ccc",
      backgroundColor: Colors[theme].primary,
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
