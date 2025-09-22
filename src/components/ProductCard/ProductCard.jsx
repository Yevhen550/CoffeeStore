import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ProductCard = ({ imageUrl, title, price, onPress }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.selectedCard]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text style={[styles.title, isSelected && styles.selectedText]}>
          {title}
        </Text>
        <Text style={[styles.price, isSelected && styles.selectedText]}>
          {price} ₴
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 2,
    borderColor: "transparent",
  },
  selectedCard: {
    borderColor: "#ff8c3a",
    backgroundColor: "#ffe5d6",
  },
  selectedText: {
    color: "#ff8c3a",
    fontWeight: "700",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#333",
  },
  price: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
});

export default ProductCard;
