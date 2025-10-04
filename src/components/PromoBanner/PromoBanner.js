import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const PromoBanner = ({ imageSource, text }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.banner} />
      <Text style={styles.offer}>{text}</Text>
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
  },
  offer: {
    position: "absolute",
    color: Colors.light.background,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    top: 60,
    backgroundColor: "rgba(235, 115, 35, 0.96)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
});

export default PromoBanner;
