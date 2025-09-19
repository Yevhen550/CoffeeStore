import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import alertMessage from "../helpers/alert";
import CategoryList from "../components/CategoryList/CategoryList";
import { SetStateAction, useState } from "react";
import categories from "../Data/categories";
import products from "../Data/products";
import ProductCard from "../components/ProductCard/ProductCard";

type Props = StaticScreenProps<{
  user: string;
}>;

const Profile = ({ route }: Props) => {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const handleCategoryPress = (categoryName: SetStateAction<string>) => {
    setActiveCategory(categoryName);
  };

  return (
    <View style={styles.container}>
      <CategoryList
        categories={categories}
        activeCategory={activeCategory}
        onCategoryPress={handleCategoryPress}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              imageUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton
          title="Купити"
          onPress={() => {
            alertMessage();
          }}
        />
      </View>
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
    backgroundColor: "#fff",
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default Profile;
