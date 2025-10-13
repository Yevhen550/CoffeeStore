import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ title, logo }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: palette.primary }]}>
      {logo && <Image source={logo} style={styles.logo} />}{" "}
      <Text style={[styles.title, { color: palette.text }]}>{title}</Text>{" "}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
  },
  logo: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 20, fontWeight: "700" },
});

export default Header;
