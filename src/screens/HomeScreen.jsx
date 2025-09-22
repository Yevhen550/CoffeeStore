import { StyleSheet, View } from "react-native";
import PromoBanner from "../components/PromoBanner/PromoBanner";

const HomeScreen = () => {
  return (
    <View contentContainerStyle={styles.container}>
      <PromoBanner
        imageSource={require("../../src/assets/Image.png")}
        text={"Спеціальна пропозиція\nМаккіато 20%"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
  },
});

export default HomeScreen;
