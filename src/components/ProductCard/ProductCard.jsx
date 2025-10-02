import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const ProductCard = ({
  imageUrl,
  title,
  price,
  onPress,
  theme = "light",
  isSelected: externalSelected,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const selected =
    externalSelected !== undefined ? externalSelected : isSelected;
  const currentColors = Colors[theme];

  const handlePress = () => {
    setIsSelected(!isSelected);
    if (onPress) onPress();
  };

  return (
    <TouchableOpacity
      style={[
        styles.card,
        {
          backgroundColor: selected
            ? currentColors.secondary + "33"
            : currentColors.white,
          borderColor: selected ? currentColors.secondary : "transparent",
        },
      ]}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.info}>
        <Text
          style={[
            styles.title,
            { color: selected ? currentColors.secondary : currentColors.text },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.price,
            {
              color: selected ? currentColors.secondary : currentColors.subText,
            },
          ]}
        >
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
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 2,
  },
  image: { width: 70, height: 70, borderRadius: 12, marginRight: 12 },
  info: { flex: 1, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  price: { fontSize: 14, fontWeight: "500" },
});

export default ProductCard;
