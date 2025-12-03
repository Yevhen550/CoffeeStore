import React, { useContext, useCallback } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const CARD_SIZE = {
  IMAGE: 70,
  RADIUS: 16,
  PADDING: 12,
  SHADOW_OPACITY: 0.15,
  SHADOW_RADIUS: 6,
  SHADOW_OFFSET: { width: 0, height: 4 },
};

const ProductCard = React.memo(
  ({ imageUrl, title, price, onPress, isSelected }) => {
    const { theme } = useContext(ThemeContext);
    const palette = Colors[theme];

    const scale = useSharedValue(1);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }));

    const handlePress = useCallback(() => {
      scale.value = withTiming(0.97, { duration: 120 }, () => {
        scale.value = withTiming(1, { duration: 120 });
      });

      if (onPress) onPress();
    }, [onPress]);

    return (
      <Animated.View style={[animatedStyle]}>
        <TouchableOpacity
          style={[
            styles.card,
            {
              backgroundColor: isSelected
                ? palette.secondary + "33"
                : palette.background,
              borderColor: isSelected
                ? palette.secondary
                : palette.secondary + "40",
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
                { color: isSelected ? palette.secondary : palette.text },
              ]}
            >
              {title}
            </Text>

            <Text
              style={[
                styles.price,
                { color: isSelected ? palette.secondary : palette.subText },
              ]}
            >
              {price} ₴
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: CARD_SIZE.RADIUS,
    padding: CARD_SIZE.PADDING,
    shadowOpacity: CARD_SIZE.SHADOW_OPACITY,
    shadowRadius: CARD_SIZE.SHADOW_RADIUS,
    shadowOffset: CARD_SIZE.SHADOW_OFFSET,
    elevation: 6,
    borderWidth: 1,
  },
  image: {
    width: CARD_SIZE.IMAGE,
    height: CARD_SIZE.IMAGE,
    borderRadius: 12,
    marginRight: 12,
  },
  info: { flex: 1, justifyContent: "center" },
  title: { fontSize: 16, fontWeight: "600", marginBottom: 4 },
  price: { fontSize: 14, fontWeight: "500" },
});

export default ProductCard;
