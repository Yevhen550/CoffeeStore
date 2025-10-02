import React, { useContext } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import Colors from "../constants/Colors";

const FavoritesScreen = () => {
  const { theme } = useContext(ThemeContext);
  const currentColors = Colors[theme];

  const backgroundAnim = new Animated.Value(theme === "light" ? 0 : 1);

  React.useEffect(() => {
    Animated.timing(backgroundAnim, {
      toValue: theme === "light" ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [theme]);

  const interpolatedBg = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.light.background, Colors.dark.background],
  });

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: interpolatedBg }]}
    >
      <Text style={[styles.text, { color: currentColors.text }]}>
        Вітаю у магазині!
      </Text>
      <ThemeSwitcher />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 20, marginBottom: 20 },
});

export default FavoritesScreen;
