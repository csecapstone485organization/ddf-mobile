import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import WorkspaceRow from './WorkspaceRow'
import store from '../store/store'


const WorkspaceSelectionList = ({ onWorkspaceSelection }) => {
  const listData = [
    {label:'Workspace 1'},
    {label:'Workspace 2'},
    {label:'Workspace 3'},
    {label:'Workspace 4'},
  ]

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(listData)

  contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  const onPress = (label) => {
    Actions.editQuery()
    onWorkspaceSelection(label);
    console.log(store.getState())
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
    // todos: PropTypes.arrayOf(PropTypes.shape({
    //   label: PropTypes.string.isRequired
    // }).isRequired).isRequired,
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
