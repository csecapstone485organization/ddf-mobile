import React, { PropTypes, Component } from 'react'
import { View, ListView, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DetailRow from './DetailRow'
import DetailTimeRow from './DetailTimeRow'
import store from '../store/store'


export default class DetailsList extends Component {
  getRowComponent(rowData) {
    if (rowData.isTime) {
      return <DetailTimeRow
                {...rowData}
              />
    }
    return <DetailRow
      {...rowData}
    />
  }

  render() {
    const selectedResult = this.props.selectedResult
    var listData = [
      {label:'Title: ', info: selectedResult.metacard.properties.title},
      {label:'Created: ', info: selectedResult.metacard.properties.created, isTime: true},
      {label:'Modified: ', info: selectedResult.metacard.properties.modified, isTime: true},
      {label:'ID: ', info: selectedResult.metacard.properties.id},
    ]

    if (selectedResult.metacard.geometry !== null) {
      listData.push(
        {label:'Latitude: ', info: selectedResult.metacard.geometry.coordinates[0]},
        {label:'Longitude: ', info: selectedResult.metacard.geometry.coordinates[1]}
      )
    }

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(listData)

    contextTypes = {
      routes: PropTypes.object.isRequired,
    };

    return(
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => this.getRowComponent(rowData)}
          />
        </View>
      )
    }
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
