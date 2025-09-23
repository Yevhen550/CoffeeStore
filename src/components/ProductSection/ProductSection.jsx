import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SectionTitle from "../SectionTitle/SectionTitle";
import HorizontalProductCard from "../HorizontalProductCard/HorizontalProductCard";

const ProductSection = ({ title, linkText, onLinkPress, products = [] }) => {
  return (
    <View style={styles.section}>
      <SectionTitle
        title={title}
        linkText={linkText}
        onLinkPress={onLinkPress}
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
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
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

export default ProductSection;
