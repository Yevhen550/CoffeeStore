import React, { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const PromoBanner = ({ imageSource, text }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.banner} />
      <Text
        style={[
          styles.offer,
          {
            color: palette.background,
            backgroundColor:
              theme === "light"
                ? "rgba(235, 115, 35, 0.96)"
                : "rgba(204, 147, 84, 0.9)",
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  offer: {
    position: "absolute",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    top: 60,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
});

export default PromoBanner;
