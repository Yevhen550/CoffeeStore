import { Text } from "@react-navigation/elements";
import { StaticScreenProps } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/CustomButton/CustomButton";
import alertMessage from "../../helpers/alert";

type Props = StaticScreenProps<{
  user: string;
}>;

export function Profile({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text>{route.params.user}'s Profile</Text>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
});
