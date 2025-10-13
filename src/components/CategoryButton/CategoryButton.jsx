import React, { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const CategoryButton = ({ title, isActive, onPress }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: isActive ? palette.primary : palette.background,
          borderColor: isActive ? palette.primary : palette.secondary,
          borderWidth: isActive ? 0 : 1,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: isActive ? palette.text : palette.primary,
          },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CategoryButton;
