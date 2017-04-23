import React, { Component } from 'react'
import { ListView, View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import Title from '../components/Title'
import QuerySelectionContainer from '../containers/QuerySelectionContainer'
import { Actions } from 'react-native-router-flux'

class QuerySelectionScreen extends Component<void, void, void> {

  static renderRightButton = (props) => {
        return (
            <TouchableOpacity onPress={() => Actions.editQuery()} style={
              {paddingTop: 3}
            }>
                <Text style={{color:'#414770'}}>New</Text>
            </TouchableOpacity>
        );
  }

  render() {
    return(
      <QuerySelectionContainer/>
    )
  }
}

export default QuerySelectionScreen
