import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';

import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={styles.errorStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size={'large'} />;
    } 

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
            Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.titleArea}>
            <Text style={styles.title}>
              Welcome Managers
            </Text>
          </View>
        </CardSection>
        <CardSection>
          <Input
            value={this.props.email}
            label="Email"
            placeholder="test@test.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.props.password}
            secureTextEntry
            label="Password"
            placeholder="111111"
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        
        {this.renderError()}

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  // return {
  //   email: state.auth.email,
  //   password: state.auth.password,
  //   error: state.auth.error,
  //   loading: state.auth.loading,
  // };
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    margin: 40,
  },
  titleArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default connect(mapStateToProps, { 
  emailChanged, passwordChanged, loginUser 
})(LoginForm);