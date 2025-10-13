import React, { useContext } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import SectionTitle from "../SectionTitle/SectionTitle";
import HorizontalProductCard from "../HorizontalProductCard/HorizontalProductCard";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";

const ProductSection = ({ title, linkText, onLinkPress, products = [] }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <View style={[styles.section, { backgroundColor: palette.background }]}>
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
              theme={theme}
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
