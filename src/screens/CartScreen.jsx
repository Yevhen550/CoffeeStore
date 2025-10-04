import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { ThemeContext } from "../context/ThemeContext";
import Colors from "../constants/Colors";
import CartCard from "../components/CartCard/CartCard";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 16 },
});

export default CartScreen;
