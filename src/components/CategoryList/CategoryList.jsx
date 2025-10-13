import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CategoryButton from "../CategoryButton/CategoryButton.jsx";
import Colors from "../../constants/Colors";
import { ThemeContext } from "../../context/ThemeContext";

const CategoryList = ({ categories, activeCategory, onCategoryPress }) => {
  const { theme } = useContext(ThemeContext);
  const palette = Colors[theme];

  return (
    <View style={[styles.container, { backgroundColor: palette.background }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map((category) => (
          <CategoryButton
            key={category.id || category.name}
            title={category.name}
            isActive={activeCategory === category.name}
            onPress={() => onCategoryPress(category.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
});

export default CategoryList;
