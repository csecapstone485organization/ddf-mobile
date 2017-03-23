import React, { Component } from 'react'
import { ListView, Text, View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ListResultsContainer from '../containers/ListResultsContainer'

class ListResultsScene extends Component<void, void, void> {
  render() {
    return(
      <ListResultsContainer/>
    )
  }
}

var styles = StyleSheet.create({
});

export default ListResultsScene
