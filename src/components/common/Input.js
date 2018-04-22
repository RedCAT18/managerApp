import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const Input = ({ label, value, placeholder, onChangeText, secureTextEntry=false }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput 
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={styles.loginInput}
        placeholder={placeholder}
        placeholderTextColor={'#aaa'}
        underlineColorAndroid={'transparent'} 
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    loginInput: {
      color: '#000',
      paddingRight: 5,
      paddingLeft: 5,
      fontSize: 16,
      lineHeight: 23,
      flex: 2,
    },
    labelStyle: {
      fontSize: 16,
      paddingLeft: 20,
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,

    }
});

export { Input };

