import React from "react";
import { StyleSheet } from "react-native";
import { BaseToast, ErrorToast } from "react-native-toast-message";
import Colors from "../constants/Colors";

export const toastConfig = {
  success: (props) => (
    <BaseToast
      {...props}
      style={styles.successContainer}
      contentContainerStyle={styles.content}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  error: (props) => (
    <ErrorToast
      {...props}
      style={styles.errorContainer}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
  info: (props) => (
    <BaseToast
      {...props}
      style={styles.infoContainer}
      contentContainerStyle={styles.content}
      text1Style={styles.text1}
      text2Style={styles.text2}
    />
  ),
};

const styles = StyleSheet.create({
  successContainer: {
    borderLeftColor: Colors.success,
    backgroundColor: Colors.bg,
  },
  errorContainer: {
    borderLeftColor: Colors.error,
    backgroundColor: Colors.bg,
  },
  infoContainer: {
    borderLeftColor: Colors.info,
    backgroundColor: Colors.bg,
  },
  content: {
    paddingHorizontal: 15,
  },
  text1: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
  },
  text2: {
    fontSize: 14,
    color: Colors.subText,
  },
});
