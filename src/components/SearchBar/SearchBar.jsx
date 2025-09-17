import React, { useState } from 'react';
import { SearchBar } from '@rneui/themed';
import { View, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const SearchBarComponent = () => {
  const [search, setSearch] = useState('');

  const updateSearch = text => {
    setSearch(text);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Пошук напою..."
        onChangeText={updateSearch}
        value={search}
        platform="default"
        containerStyle={styles.searchContainer}
        inputContainerStyle={styles.inputContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  searchContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: Colors.background,
    borderRadius: 8,
  },
});

export default SearchBarComponent;
