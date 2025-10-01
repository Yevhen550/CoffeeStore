import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const FavoritesScreen = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "light" ? "#fff" : "#333" },
      ]}
    >
      <Text style={{ color: theme === "light" ? "#000" : "#fff" }}>
        Вітаю у магазині!
      </Text>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>FavoritesScreen</Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   gap: 10,
  // },
  // row: {
  //   flexDirection: "row",
  //   gap: 10,
  // },
});

export default FavoritesScreen;
