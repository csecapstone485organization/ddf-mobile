import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import Title from '../components/Title'
import { Actions } from 'react-native-router-flux'
import MapResultsContainer from '../containers/MapResultsContainer'

class MapResultsScene extends Component<void, void, void> {
  render() {
    return(
      <MapResultsContainer nextScreen={Actions.detailsPage}/>
    )
  }
}

export default MapResultsScene
