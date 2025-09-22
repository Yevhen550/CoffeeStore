import React from "react";
import { View, Text, Image, StyleSheet, ScrollView, Alert } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";

const ProductDetailsScreen = ({ route }) => {
  const { selectedProducts } = route.params;

  const handleBuyAll = () => {
    Alert.alert("Покупка", `Ви придбали ${selectedProducts.length} товар(и)!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {selectedProducts.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} ₴</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      ))}

      <View style={styles.buttonContainer}>
        <CustomButton title="Купити" onPress={handleBuyAll} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  error: {
    fontSize: 18,
    fontWeight: "600",
    color: "red",
  },
  productContainer: {
    marginBottom: 24,
    backgroundColor: "#fff",
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
  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
    marginBottom: 12,
  },
  buttonContainer: {
    marginVertical: 20,
  },
});

export default ProductDetailsScreen;
