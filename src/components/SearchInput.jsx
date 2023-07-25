import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style.js';

const SearchInput = ({placeholder, value, onChangeText, onSubmitEditing}) => {
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef();

  const clearText = () => {
    onChangeText('');
  };

  const handleBlurTextInput = () => {
    setIsFocused(false);
    searchRef.current.blur();
  };
  return (
    <View style={[styles.searchContainer]}>
      {isFocused ? (
        <TouchableOpacity
          activeOpacity={1.0}
          style={styles.searchButton}
          onPress={handleBlurTextInput}>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      ) : (
        <Icon
          name="magnify"
          size={24}
          color="#fff"
          style={styles.searchButton}
        />
      )}

      <TextInput
        ref={searchRef}
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#fff"
        value={value}
        onChangeText={onChangeText}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onSubmitEditing={() => {
          onSubmitEditing();
          handleBlurTextInput();
        }}
      />

      {value.length > 0 && isFocused && (
        <TouchableOpacity onPress={clearText} style={styles.searchButton}>
          <Icon name="close" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
