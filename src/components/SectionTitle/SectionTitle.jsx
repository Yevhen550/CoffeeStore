import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const SectionTitle = ({ title, linkText, onLinkPress }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {linkText && onLinkPress && (
      <TouchableOpacity onPress={onLinkPress}>
        <Text style={styles.link}>{linkText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 15,
  },
  title: { fontWeight: "bold", fontSize: 16 },
  link: { color: "#FF6600" },
});

export default SectionTitle;
