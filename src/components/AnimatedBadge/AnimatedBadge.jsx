import React, { useEffect, useRef, useContext } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const AnimatedBadge = ({ count, children }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.4,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]).start();
  }, [count]);

  return (
    <View style={{ position: "relative" }}>
      {children}
      <Animated.View
        style={[
          styles.badge,
          {
            backgroundColor: palette.danger,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Text style={[styles.badgeText, { color: palette.white }]}>
          {" "}
          {count}
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: Colors.light.background,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default AnimatedBadge;
