import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ResultsRow from '../components/ResultsRow'
import store from '../store/store'
import { cql_TEST_RESULTS } from '../constants/MockData.js'

const ResultsList = ({ onResultSelection, listData }) => {

  // TODO: Uncomment to prevent listData from loading from mock data
  listData = cql_TEST_RESULTS.results
  console.log(listData)
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(listData)
  console.log(dataSource)

  const onPress = (result) => {
    Actions.detailsPage()
    onResultSelection(result);
  }

  return(
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData) =>
          <ResultsRow
            onPress={() => onPress(rowData)}
            rowData={rowData}
          />}
        />
      </View>
    )
}

  ResultsList.propTypes = {
    listData: PropTypes.array.isRequired
  }

  const styles = StyleSheet.create({
    listContent: {
      flex: 1,
      alignSelf: 'stretch'
    },
    container: {
      flex: 1,
      marginBottom:40
    }
  });

  export default ResultsList
