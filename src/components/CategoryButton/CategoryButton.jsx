import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const CategoryButton = ({ title, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isActive ? styles.activeButton : styles.inactiveButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          isActive ? styles.activeButtonText : styles.inactiveButtonText,
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
  activeButton: {
    backgroundColor: "#F58231",
  },
  inactiveButton: {
    backgroundColor: "#E6F0FF",
    borderWidth: 1,
    borderColor: "#E6F0FF",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  activeButtonText: {
    color: Colors.white,
  },
  inactiveButtonText: {
    color: "#F58231",
  },
});

export default CategoryButton;
