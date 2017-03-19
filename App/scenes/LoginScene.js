import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LoginContainer from '../containers/LoginContainer'

export default class LoginScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <LoginContainer nextScreen={Actions.editQuery}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
