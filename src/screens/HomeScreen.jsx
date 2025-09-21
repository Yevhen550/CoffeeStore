import { Button, Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      {/* <Button screen="Profile" params={{ user: "jane" }}>
        Go to Menu
      </Button>
      <Button screen="Settings">Go to Settings</Button> */}
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
});
export default HomeScreen;
