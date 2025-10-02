import React from "react";
import { View, TouchableOpacity, StyleSheet, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { ThemeContext } from "../../context/ThemeContext";
import Colors from "../../constants/Colors";
import ThemedHeader from "../ThemedHeader/ThemedHeader";

const CustomHeader = ({ showBack }) => {
  const navigation = useNavigation();
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <ThemedHeader>
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="arrow-back"
              size={28}
              color={theme === "light" ? Colors.light.text : Colors.dark.text}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          >
            <Ionicons
              name="menu"
              size={28}
              color={theme === "light" ? Colors.light.text : Colors.dark.text}
            />
          </TouchableOpacity>
        )}
      </View>
    </ThemedHeader>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default CustomHeader;

// import React from "react";
// import { View, TouchableOpacity, StyleSheet } from "react-native";
// import { Ionicons } from "@expo/vector-icons"; // іконка бургер меню
// import { useNavigation } from "@react-navigation/native";
// import ThemedHeader from "../components/ThemedHeader/ThemedHeader";
// import Colors from "../constants/Colors";

// const CustomHeader = () => {
//   const navigation = useNavigation();

//   return (
//     <ThemedHeader>
//       <View style={styles.container}>
//         {/* Бургер меню зліва */}
//         <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
//           <Ionicons name="menu" size={28} color={Colors.text} />
//         </TouchableOpacity>

//         {/* Свічер теми справа */}
//         <View style={{ marginLeft: "auto" }}>
//           <ThemedHeader />
//         </View>
//       </View>
//     </ThemedHeader>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingHorizontal: 16,
//   },
// });

// export default CustomHeader;
