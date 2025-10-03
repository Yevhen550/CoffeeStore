import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const HorizontalProductCard = ({
  image,
  title,
  price,
  onPress,
  theme = "light",
}) => {
  const currentColors = Colors[theme];

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: currentColors.background,
          shadowColor: currentColors.text,
          borderColor: currentColors.secondary + "40",
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, { color: currentColors.text }]}>
          {title}
        </Text>
        <Text style={[styles.price, { color: currentColors.secondary }]}>
          {price} ₴
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 8,
    width: "100%",
    // Тіні iOS
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    // Тіні Android
    elevation: 4,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    marginBottom: 8,
  },
  info: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default HorizontalProductCard;
