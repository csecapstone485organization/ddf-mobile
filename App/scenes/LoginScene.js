import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import LoginContainer from '../containers/LoginContainer'

export default class LoginScene extends Component {
  render() {
    return (
      <LoginContainer nextScreen={()=>{Actions.workspaceSelection({hideNavBar:false})}}/>
    )
  }
}
