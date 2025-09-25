import { FlatList, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import ProductCard from "../components/ProductCard/ProductCard";
import { errorMessageToast } from "../helpers/toastMessages";
import products from "../store/productsData";
import { ROUTES } from "../navigation/routes";
import Colors from "../constants/Colors";
import AnimatedBadge from "../components/AnimatedBadge/AnimatedBadge";

const ProductListScreen = () => {
  const navigation = useNavigation();

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (product) => {
    if (selectedProducts.some((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id));
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleBuy = () => {
    if (selectedProducts.length > 0) {
      navigation.navigate(ROUTES.PRODUCT_DETAILS, { selectedProducts });
    } else {
      errorMessageToast();
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageUrl={item.imageUrl}
            title={item.title}
            price={item.price}
            onPress={() => handleSelect(item)}
            isSelected={selectedProducts.some((p) => p.id === item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
      {selectedProducts.length > 0 && (
        <View style={styles.buttonContainer}>
          <CustomButton title="Купити" onPress={handleBuy}>
            <AnimatedBadge count={selectedProducts.length}>
              <FontAwesome
                name="shopping-cart"
                size={24}
                color={Colors.white}
              />
            </AnimatedBadge>
          </CustomButton>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: Colors.white,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  iconWithBadge: {
    position: "relative",
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "red",
    borderRadius: 8,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default ProductListScreen;
