import { Text } from "@react-navigation/elements";
import { Image, StyleSheet, View } from "react-native";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Image source={require("../assets/Image.png")} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: "contain",
  },
});

export default SettingsScreen;
