import {
  FlatList,
  StyleSheet,
  View,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";
import cloneDeep from "lodash.clonedeep";
import sortBy from "lodash.sortby";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState, useContext, useEffect, useRef } from "react";
import CustomButton from "../components/CustomButton/CustomButton";
import ProductCard from "../components/ProductCard/ProductCard";
import { errorMessageToast } from "../helpers/toastMessages";
import products from "../store/productsData";
import { ROUTES } from "../navigation/routes";
import Colors from "../constants/Colors";
import AnimatedBadge from "../components/AnimatedBadge/AnimatedBadge";
import { ThemeContext } from "../context/ThemeContext";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const ProductListScreen = () => {
  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);
  const currentColors = Colors[theme];

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleSelect = (product) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

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

  const backgroundAnim = useRef(
    new Animated.Value(theme === "light" ? 0 : 1)
  ).current;

  useEffect(() => {
    Animated.timing(backgroundAnim, {
      toValue: theme === "light" ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [theme, backgroundAnim]);

  const interpolatedBg = backgroundAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [Colors.light.background, Colors.dark.background],
  });

  // 🔹 Оптимізована робота з lodash:
  // 1) cloneDeep — щоб не мутувати вихідний масив products
  // 2) sortBy — сортуємо товари за ціною перед рендером
  const sortedProducts = sortBy(cloneDeep(products), "price");

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: interpolatedBg }]}
    >
      <FlatList
        data={sortedProducts}
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
        contentContainerStyle={[
          styles.listContent,
          { backgroundColor: currentColors.background },
        ]}
      />
      {selectedProducts.length > 0 && (
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor: currentColors.background },
          ]}
        >
          <CustomButton title="Додати" onPress={handleBuy} theme={theme}>
            <AnimatedBadge count={selectedProducts.length}>
              <FontAwesome
                name="shopping-cart"
                size={24}
                color={currentColors.white}
              />
            </AnimatedBadge>
          </CustomButton>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default ProductListScreen;
