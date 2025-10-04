import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import Colors from "../constants/Colors";
import { errorMessageToast } from "../helpers/toastMessages";
import { ROUTES } from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = ({ route, theme = "light" }) => {
  const { selectedProducts } = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const currentColors = Colors[theme];

  const handleBuyAll = () => {
    if (selectedProducts.length > 0) {
      selectedProducts.forEach((p) => dispatch(addItem(p)));
      navigation.navigate(ROUTES.CART_SCREEN);
    } else {
      errorMessageToast();
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.productContainer,
        {
          backgroundColor: currentColors.background,
          shadowColor: currentColors.text,
          borderColor: currentColors.secondary + "40",
        },
      ]}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={[styles.title, { color: currentColors.text }]}>
        {item.title}
      </Text>
      <Text style={[styles.price, { color: currentColors.secondary }]}>
        {item.price} ₴
      </Text>
    </View>
  );

  return (
    <FlatList
      data={selectedProducts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={[
        styles.container,
        { backgroundColor: currentColors.background },
      ]}
      ListFooterComponent={
        <View style={styles.buttonContainer}>
          <CustomButton title="Купити" onPress={handleBuyAll} />
        </View>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  productContainer: {
    borderRadius: 16,
    padding: 12,
    marginBottom: 24,
    // Тінь iOS
    shadowOpacity: 0.15,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 6 },
    // Тінь Android
    elevation: 6,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default ProductDetailsScreen;
