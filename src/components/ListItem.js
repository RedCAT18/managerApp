import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableWithoutFeedback, View, StyleSheet, Dimensions } from 'react-native';
import { CardSection } from './common';


const { width } = Dimensions.get('window');

class ListItem extends Component {
  onRowPress() {
    //move scene with particular user data what I want to see
    Actions.employeeEdit({ employee: this.props.employee });
  }
  
  render() {
    const { name, shift, phone } = this.props.employee;

    return (
      <TouchableWithoutFeedback
        onPress={this.onRowPress.bind(this)}
      >
        <View>
          <CardSection>
            <View style={styles.list}>
              <Text style={styles.titleStyle}>{name}</Text>
              <Text style={styles.textStyle}>{shift}</Text>
              <Text style={styles.textStyle}>{phone}</Text>
            </View>
          </CardSection>  
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    width: width * 0.3,
    fontSize: 16,
    fontWeight: '600',
    paddingRight: 20,
  },
  textStyle: {
    width: width * 0.35,
    fontSize: 14,
    paddingLeft: 10,
    lineHeight: 16,
    marginTop: 5,
    justifyContent: 'flex-end'
  },
  list: {
    padding: 15,
    flexDirection: 'row'
  }
});

export default ListItem;
