import { ScrollView, StyleSheet, View } from 'react-native';
import CategoryButton from '../CategoryButton/CategoryButton.jsx';
import Colors from '../../constants/Colors';

const CategoryList = ({ categories, activeCategory, onCategoryPress }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {categories.map(category => (
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
    backgroundColor: Colors.background,
    paddingVertical: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
});

export default CategoryList;
