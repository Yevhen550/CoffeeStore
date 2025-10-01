import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";

const CartScreen = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      {cart.length === 0 ? (
        <Text>Кошик порожній</Text>
      ) : (
        cart.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text>
              {item.name} — {item.quantity}
            </Text>
            <View style={styles.actions}>
              <Button
                title="+"
                onPress={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity + 1 })
                  )
                }
              />
              <Button
                title="-"
                onPress={() =>
                  dispatch(
                    updateQuantity({ id: item.id, quantity: item.quantity - 1 })
                  )
                }
              />
              <Button
                title="Видалити"
                onPress={() => dispatch(removeItem(item.id))}
              />
            </View>
          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  item: { marginBottom: 10, padding: 10, borderBottomWidth: 1 },
  actions: { flexDirection: "row", gap: 8, marginTop: 5 },
});

export default CartScreen;
