import React, { ReactNode } from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  View,
} from "react-native";
import Colors from "../../constants/Colors";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  children?: ReactNode;
  theme?: "light" | "dark";
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  children,
  theme = "light",
}) => {
  const currentColors = Colors[theme];

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: currentColors.secondary }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        <Text style={[styles.text, { color: currentColors.background }]}>
          {title}
        </Text>
        {children && <View style={styles.icon}>{children}</View>}
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.8,
    alignSelf: "center",
    // Shadow для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // Shadow для Android
    elevation: 3,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButton;
