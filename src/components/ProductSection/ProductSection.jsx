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
              image={item.image}
              title={item.name}
              price={item.price}
              onPress={() => console.log(item.name)}
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
    gap: 15,
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
