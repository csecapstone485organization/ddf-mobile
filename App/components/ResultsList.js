import React, { PropTypes } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import ResultsRow from '../components/ResultsRow'
import store from '../store/store'

const ResultsList = ({ onResultSelection, listData }) => {
  const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
  const dataSource = ds.cloneWithRows(listData)

  const onPress = (result) => {
    Actions.detailsPage()
    onResultSelection(result.id);
  }

  return(
    <View style={styles.container}>
      <ListView
        dataSource={dataSource}
        renderRow={
          (rowData) =>
          <ResultsRow
            onPress={() => onPress(rowData)}
            {...rowData}
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
      flex: 1
    }
  });

  export default ResultsList
