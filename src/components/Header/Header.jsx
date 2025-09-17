import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../../constants/Colors';

const Header = ({ title, logo }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: Colors.secondary,
  },
  logo: { width: 40, height: 40, marginRight: 10 },
  title: { fontSize: 20, fontWeight: '700' },
});

export default Header;
