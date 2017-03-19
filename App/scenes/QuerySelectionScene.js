import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import Title from '../components/Title'
import QuerySelectionContainer from '../containers/QuerySelectionContainer'

class QuerySelectionScreen extends Component<void, void, void> {
  render() {
    return(
      <QuerySelectionContainer/>
    )
  }
}

export default QuerySelectionScreen
