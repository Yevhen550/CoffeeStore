import React from "react";
import { ScrollView, StyleSheet, FlatList, View } from "react-native";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../navigation/routes";
import products from "../store/productsData";
import HorizontalProductCard from "../components/HorizontalProductCard/HorizontalProductCard";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PromoBanner
        imageSource={require("../../src/assets/Image.png")}
        text={"Спеціальна пропозиція\nМаккіато 20%"}
      />

      <SectionTitle
        title="Ідеально для тебе"
        linkText="Побачити більше"
        onLinkPress={() =>
          navigation.navigate(ROUTES.PRODUCT_MENU, {
            screen: ROUTES.PRODUCTLIST_SCREEN,
          })
        }
      />

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsRow}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <HorizontalProductCard
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
              onPress={() => console.log(item.title)}
            />
          </View>
        )}
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
