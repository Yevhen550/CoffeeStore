import CustomButton from "../components/CustomButton/CustomButton";
import { useUser } from "../context/user/useUser";
import { ROUTES } from "../navigation/routes";
import type { ProfileStackParamList } from "../navigation/types";
import { useNavigation } from "@react-navigation/native";
import type { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const ProfileScreen = () => {
  const { user } = useUser();
  const navigation =
    useNavigation<
      StackNavigationProp<ProfileStackParamList, typeof ROUTES.PROFILE>
    >();
  return (
    <View style={styles.container}>
      <Text>Name</Text>
      <TextInput
        editable={false}
        style={styles.input}
        value={user?.name}
        onChangeText={() => {}}
      />
      <Text>Email</Text>
      <TextInput
        editable={false}
        style={styles.input}
        value={user?.email}
        onChangeText={() => {}}
      />
      <CustomButton
        title="Go to Location"
        onPress={() => navigation.navigate(ROUTES.LOCATION)}
        children={null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
});

export default ProfileScreen;
