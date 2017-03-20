import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import QueryRow from './QueryRow'
import store from '../store/store'


const QuerySelectionList = ({ onQuerySelection }) => {
  const listData = [
    {label:'Query 1', lastRan: new Date(2017, 3, 19, 1, 40, 23, 42)},
    {label:'Query 2', lastRan: new Date(2017, 3, 19, 1, 39, 58, 693)},
    {label:'Query 3', lastRan: new Date(2017, 3, 18, 23, 7, 12, 574)},
    {label:'Query 4', lastRan: new Date(2014, 7, 12, 8, 12, 2, 810)},
  ]

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(listData)

  contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  const onPress = (label) => {
    Actions.editQuery()
    onQuerySelection(label);
    console.log(store.getState())
  }

  return(
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData) =>
          <QueryRow
            onPress={() => onPress(rowData.label)}
            {...rowData}
          />}
        />
      </View>
    )
}

  QuerySelectionList.propTypes = {
    onQuerySelection: PropTypes.func.isRequired,
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

  export default QuerySelectionList
