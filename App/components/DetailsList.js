import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DetailRow from './DetailRow'
import store from '../store/store'


const DetailsList = () => {
  const listData = [
    {label:'Name', info: 'burrito'},
    {label:'Longitude', info: '22.8'},
    {label:'Latitude', info: '63.1'},
    {label:'Mexico', info: 'yes'},
  ]

  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(listData)

  contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  return(
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData) =>
          <DetailRow
            {...rowData}
          />}
        />
      </View>
    )
}

  DetailsList.propTypes = {
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

  export default DetailsList
