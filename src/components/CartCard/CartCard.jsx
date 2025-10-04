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
          backgroundColor:
            theme === "light" ? palette.background : palette.background + "AA",
          borderColor: palette.primary,
          shadowColor: palette.text,
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
          <Ionicons name="remove" size={20} color="#fff" />
        </TouchableOpacity>

        <Text style={[styles.quantity, { color: palette.text }]}>
          {item.quantity}
        </Text>

        <TouchableOpacity
          style={[styles.btn, { backgroundColor: palette.primary }]}
          onPress={onIncrease}
        >
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.deleteBtn, { backgroundColor: palette.secondary }]}
          onPress={onRemove}
        >
          <Ionicons name="trash-outline" size={20} color="#fff" />
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
    borderWidth: 1,
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: "500" },
  price: { fontSize: 14 },
  actions: { flexDirection: "row", alignItems: "center", gap: 6 },
  btn: { borderRadius: 6, padding: 6 },
  deleteBtn: { borderRadius: 6, padding: 6 },
  quantity: { fontSize: 16, fontWeight: "600", marginHorizontal: 6 },
});

export default CartCard;
