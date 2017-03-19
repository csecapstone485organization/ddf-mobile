import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import Title from '../components/Title'
import WorkspaceSelectionContainer from '../containers/WorkspaceSelectionContainer'
import MapView from 'react-native-maps';

class WorkspaceSelectionScene extends Component<void, void, void> {
  render() {
    return(
      <WorkspaceSelectionContainer/>
    )
  }
}

export default WorkspaceSelectionScene
