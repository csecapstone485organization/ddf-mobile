import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import Title from '../components/Title'
import MapResultsContainer from '../containers/MapResultsContainer'

class MapResultsScene extends Component<void, void, void> {
  render() {
    return(
      <MapResultsContainer/>
    )
  }
}

export default MapResultsScene



