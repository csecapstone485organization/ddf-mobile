import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import WorkspaceRow from './WorkspaceRow'
import store from '../store/store'

const WorkspaceSelectionList = ({ onWorkspaceSelection, listData }) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(listData)

  const onPress = (label) => {
    Actions.querySelection()
    onWorkspaceSelection(label);
  }

  return(
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData) =>
          <WorkspaceRow
            onPress={() => onPress(rowData.label)}
            {...rowData}
          />}
        />
      </View>
    )
}

  WorkspaceSelectionList.propTypes = {
    onWorkspaceSelection: PropTypes.func.isRequired,
    routes: PropTypes.object,
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

  export default WorkspaceSelectionList
