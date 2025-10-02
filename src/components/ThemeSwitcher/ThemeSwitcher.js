import React, { useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isEnabled = theme === "dark";
  const currentColors = Colors[theme];

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{
          false: currentColors.switchTrack,
          true: currentColors.primary,
        }}
        thumbColor={
          isEnabled ? currentColors.switchThumb : currentColors.switchThumb
        }
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 20 },
});

export default ThemeSwitcher;
