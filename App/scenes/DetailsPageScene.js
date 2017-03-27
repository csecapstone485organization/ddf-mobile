import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import Title from '../components/Title'
import DetailsListContainer from '../containers/DetailsListContainer'

class DetailsPageScene extends Component<void, void, void> {
  render() {
    return(
      <DetailsListContainer/>
    )
  }
}

export default DetailsPageScene
