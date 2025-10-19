import React, { useState, useContext } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const ProductCard = ({
  imageUrl,
  title,
  price,
  onPress,
  isSelected: externalSelected,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  const selected =
    externalSelected !== undefined ? externalSelected : isSelected;

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
            ? palette.secondary + "33"
            : palette.background,
          borderColor: selected ? palette.secondary : palette.secondary + "40",
          shadowColor: palette.text,
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
            { color: selected ? palette.secondary : palette.text },
          ]}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.price,
            { color: selected ? palette.secondary : palette.subText },
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
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    borderWidth: 1,
  },
  image: { width: 70, height: 70, borderRadius: 12, marginRight: 12 },
  info: { flex: 1, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  price: { fontSize: 14, fontWeight: "500" },
});

export default ProductCard;
