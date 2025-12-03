import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";
import ThemedHeader from "../ThemedHeader/ThemedHeader";

const CustomHeader = ({ showBack }) => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return <ThemedHeader></ThemedHeader>;
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomHeader;
