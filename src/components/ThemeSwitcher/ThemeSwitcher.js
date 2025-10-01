import React, { useContext } from "react";
import { View, Button } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <View>
      <Button title={`Змінити тему (${theme})`} onPress={toggleTheme} />
    </View>
  );
};

export default ThemeSwitcher;
