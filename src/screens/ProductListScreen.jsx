import { FlatList, StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton/CustomButton";
import alertMessage from "../helpers/alert";
import { useState } from "react";
import products from "../store/productsData";
import ProductCard from "../components/ProductCard/ProductCard";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../navigation/routes";

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
      alertMessage();
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

      <View style={styles.buttonContainer}>
        <CustomButton title="Купити" onPress={handleBuy} />
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
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});

export default ProductListScreen;

// import { FlatList, StyleSheet, View } from "react-native";
// import CustomButton from "../components/CustomButton/CustomButton";
// import alertMessage from "../helpers/alert";
// import { useState } from "react";
// import products from "../store/productsData";
// import ProductCard from "../components/ProductCard/ProductCard";
// import { useNavigation } from "@react-navigation/native";
// import { ROUTES } from "../navigation/routes";

// const ProductListScreen = () => {
//   const navigation = useNavigation();

//   const handleOnPress = (id) =>
//     navigation.navigate(ROUTES.PRODUCT_DETAILS, { id });

//   const [selectedProductId, setSelectedProductId] = useState(null);

//   const handleSelect = (id) => {
//     setSelectedProductId(id);
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <ProductCard
//             imageUrl={item.imageUrl}
//             title={item.title}
//             price={item.price}
//             onPress={() => handleSelect(item.id)}
//           />
//         )}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.listContent}
//       />

//       <View style={styles.buttonContainer}>
//         <CustomButton
//           title="Купити"
//           onPress={() => {
//             if (selectedProductId) {
//               handleOnPress(selectedProductId);
//             } else {
//               alertMessage("Спочатку виберіть товар!");
//             }
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     padding: 16,
//     borderTopWidth: 1,
//     borderColor: "#eee",
//     backgroundColor: "#fff",
//   },
//   listContent: {
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//   },
// });

// export default ProductListScreen;
