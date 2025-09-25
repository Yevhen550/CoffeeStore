import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import PromoBanner from "../components/PromoBanner/PromoBanner";
import { ROUTES } from "../navigation/routes";
import ProductSection from "../components/ProductSection/ProductSection";
import { fetchData } from "../API/api";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const result = await fetchData();
        setTimeout(() => {
          setData(result);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError("Не вдалося завантажити дані");
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PromoBanner
        imageSource={require("../../src/assets/Image.png")}
        text={"Спеціальна пропозиція\nМаккіато 20%"}
      />

      {loading && <ActivityIndicator size="large" color="#C67C4E" />}
      {error && <Text style={{ color: "red" }}>{error}</Text>}

      {!loading && !error && (
        <>
          <ProductSection
            title="Холодні напої"
            linkText="Побачити більше"
            onLinkPress={() =>
              navigation.navigate(ROUTES.PRODUCT_MENU, {
                screen: ROUTES.PRODUCTLIST_SCREEN,
              })
            }
            products={data}
          />

          <ProductSection
            title="Гарячі напої"
            linkText="Дивитися все"
            onLinkPress={() => console.log("Hot drinks")}
            products={data}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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

// import React, { useEffect, useState } from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   View,
//   Text,
//   ActivityIndicator,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import PromoBanner from "../components/PromoBanner/PromoBanner";
// import { ROUTES } from "../navigation/routes";
// import ProductSection from "../components/ProductSection/ProductSection";
// import { fetchData } from "../API/api";

// const HomeScreen = () => {
//   const navigation = useNavigation();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         setLoading(true);
//         const result = await fetchData();
//         // console.log(result);
//         setData(result);
//       } catch (err) {
//         // console.error("Помилка:", err);
//         setError("Не вдалося завантажити дані");
//       } finally {
//         setLoading(false);
//       }
//     };

//     getData();
//   }, []);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <PromoBanner
//         imageSource={require("../../src/assets/Image.png")}
//         text={"Спеціальна пропозиція\nМаккіато 20%"}
//       />

//       {loading && <ActivityIndicator size="large" color="#C67C4E" />}
//       {error && <Text style={{ color: "red" }}>{error}</Text>}

//       {!loading && !error && (
//         <>
//           <ProductSection
//             title="Холодні напої"
//             linkText="Побачити більше"
//             onLinkPress={() =>
//               navigation.navigate(ROUTES.PRODUCT_MENU, {
//                 screen: ROUTES.PRODUCTLIST_SCREEN,
//               })
//             }
//             products={data}
//           />

//           <ProductSection
//             title="Гарячі напої"
//             linkText="Дивитися все"
//             onLinkPress={() => console.log("Hot drinks")}
//             products={data}
//           />
//         </>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     gap: 10,
//   },
//   cardsRow: {
//     paddingLeft: 15,
//     paddingRight: 10,
//   },
//   cardWrapper: {
//     marginRight: 12,
//     width: 160,
//   },
// });

// export default HomeScreen;
