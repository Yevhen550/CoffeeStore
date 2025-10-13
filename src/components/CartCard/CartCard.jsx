import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const CartCard = ({ item, onIncrease, onDecrease, onRemove }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: palette.background,
          borderColor: palette.primary,
          shadowColor: theme === "light" ? "#00000022" : "#00000055",
        },
      ]}
    >
      <View style={styles.info}>
        <Text style={[styles.name, { color: palette.text }]}>{item.name}</Text>
        <Text style={[styles.price, { color: palette.subText }]}>
          {item.price} грн
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: palette.primary }]}
          onPress={onDecrease}
        >
          <Ionicons name="remove" size={20} color={palette.white} />
        </TouchableOpacity>

        <Text style={[styles.quantity, { color: palette.text }]}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: palette.primary }]}
          onPress={onIncrease}
        >
          <Ionicons name="add" size={20} color={palette.white} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.deleteBtn, { backgroundColor: palette.secondary }]}
          onPress={onRemove}
        >
          <Ionicons name="trash-outline" size={20} color={palette.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1.5,
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "600" },
  price: { fontSize: 14 },
  actions: { flexDirection: "row", alignItems: "center", gap: 6 },
  btn: {
    borderRadius: 8,
    padding: 6,
    minWidth: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {
    borderRadius: 8,
    padding: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: { fontSize: 16, fontWeight: "600", marginHorizontal: 6 },
});

export default CartCard;
