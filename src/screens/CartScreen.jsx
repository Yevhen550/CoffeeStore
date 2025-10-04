import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  removeItem,
  updateQuantity,
  clearCart,
  selectCart,
  selectCartCount,
  selectTotalPrice,
} from "../redux/cartSlice";
import { ThemeContext } from "../context/ThemeContext";
import Colors from "../constants/Colors";
import CartCard from "../components/CartCard/CartCard";
import CustomButton from "../components/CustomButton/CustomButton";

const CartScreen = () => {
  const cart = useSelector(selectCart);
  const totalCount = useSelector(selectCartCount);
  const totalPrice = useSelector(selectTotalPrice);

  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  const handleBuyAll = () => {
    if (cart.length === 0) return;

    Alert.alert(
      "Підтвердження покупки",
      `Всього товарів: ${totalCount}\nСума: ${totalPrice} грн`,
      [
        { text: "Скасувати", style: "cancel" },
        {
          text: "Підтвердити",
          onPress: () => {
            dispatch(clearCart());
            Alert.alert("✅ Покупка оформлена", "Дякуємо за замовлення!");
          },
        },
      ]
    );
  };

  if (cart.length === 0) {
    return (
      <View
        style={[styles.emptyContainer, { backgroundColor: palette.background }]}
      >
        <Ionicons name="cart-outline" size={72} color={palette.subText} />
        <Text style={[styles.emptyText, { color: palette.text }]}>
          Ваш кошик порожній
        </Text>
        <Text style={[styles.emptySubText, { color: palette.subText }]}>
          Додайте щось смачне ☕️
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <Text style={[styles.title, { color: palette.text }]}>
        Ваші замовлення
      </Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CartCard
            item={item}
            onIncrease={() =>
              dispatch(
                updateQuantity({ id: item.id, quantity: item.quantity + 1 })
              )
            }
            onDecrease={() =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Math.max(item.quantity - 1, 1),
                })
              )
            }
            onRemove={() => dispatch(removeItem(item.id))}
          />
        )}
        ListFooterComponent={
          <View style={styles.footer}>
            <View style={styles.summaryContainer}>
              <Text style={[styles.summaryText, { color: palette.subText }]}>
                Всього товарів:{" "}
                <Text style={[styles.summaryValue, { color: palette.text }]}>
                  {totalCount}
                </Text>
              </Text>
              <Text style={[styles.summaryText, { color: palette.subText }]}>
                Сума:{" "}
                <Text style={[styles.summaryValue, { color: palette.text }]}>
                  {totalPrice} грн
                </Text>
              </Text>
            </View>

            <View style={styles.buttonContainer}>
              <CustomButton title="Купити" onPress={handleBuyAll} />
            </View>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 16 },
  footer: { marginTop: 16, paddingBottom: 40 },
  summaryContainer: { marginBottom: 16, paddingHorizontal: 10 },
  summaryText: { fontSize: 16, marginBottom: 4 },
  summaryValue: { fontWeight: "600" },
  buttonContainer: { paddingHorizontal: 20 },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "600",
  },
  emptySubText: { fontSize: 14, marginTop: 4 },
});

export default CartScreen;
