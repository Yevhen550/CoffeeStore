import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import { ROUTES } from "../navigation/routes";
import products from "../store/productsData";
import ProductSection from "../components/ProductSection/ProductSection";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PromoBanner
        imageSource={require("../../src/assets/Image.png")}
        text={"Спеціальна пропозиція\nМаккіато 20%"}
      />

      <ProductSection
        title="Холодні напої"
        linkText="Побачити більше"
        onLinkPress={() =>
          navigation.navigate(ROUTES.PRODUCT_MENU, {
            screen: ROUTES.PRODUCTLIST_SCREEN,
          })
        }
        products={products}
      />

      <ProductSection
        title="Гарячі напої"
        linkText="Дивитися все"
        onLinkPress={() => console.log("Hot drinks")}
        products={products.slice(0, 3)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    gap: 10,
  },
  cardsRow: {
    paddingLeft: 15,
    paddingRight: 10,
  },
  cardWrapper: {
    marginRight: 12,
    width: 160,
  },
});

export default HomeScreen;
