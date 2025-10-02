import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import Colors from "../constants/Colors";
import { infoMessageToast, errorMessageToast } from "../helpers/toastMessages";
import { ROUTES } from "../navigation/routes";
import { useNavigation } from "@react-navigation/native";

const ProductDetailsScreen = ({ route }) => {
  const { selectedProducts } = route.params;
  const navigation = useNavigation();

  const handleBuyAll = () => {
    if (selectedProducts.length > 0) {
      navigation.navigate(ROUTES.CART_SCREEN, { selectedProducts });
    } else {
      errorMessageToast();
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price} ₴</Text>
    </View>
  );

  return (
    <FlatList
      data={selectedProducts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
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
    backgroundColor: Colors.white,
  },
  productContainer: {
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 2,
    borderWidth: 2,
    borderColor: "transparent",
    marginBottom: 24,
    backgroundColor: Colors.white,
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
    color: "#4CAF50",
    marginBottom: 12,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default ProductDetailsScreen;
