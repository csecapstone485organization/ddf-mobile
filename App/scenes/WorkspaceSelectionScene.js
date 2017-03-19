import React, { Component } from 'react'
import { ListView, View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import WorkspaceRow from '../components/WorkspaceRow'
import MapView from 'react-native-maps';

class WorkspaceSelectionScene extends Component<void, void, void> {
  render() {

    const listData = [
                {label:'Workspace 1'},
                {label:'Workspace 2'},
                {label:'Workspace 3'},
                {label:'Workspace 4'},
    ]

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(listData)

    return(
      <View style={styles.container}>
        <ListView
            dataSource={dataSource}
            renderRow={
              (rowData) =>
              <WorkspaceRow
                onPress={Actions.editQuery}
                {...rowData}
              />}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    listContent: {
        flex: 1,
        alignSelf: 'stretch'
    },
    container: {
      flex: 1
    }
});

export default WorkspaceSelectionScene
