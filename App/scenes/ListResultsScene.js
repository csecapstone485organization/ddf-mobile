import React, { Component } from 'react'
import { ListView, Text, View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import ResultsRow from '../components/ResultsRow'

class ListResultsScene extends Component<void, void, void> {
  render() {
    const listData = [
                {label:'Burrito Shack'},
                {label:'Los Favoritos'},
                {label:'More Burritos'},
                {label:'Artesian Organic Burritos'},
    ]

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(listData)

    return(
      <ListView
        dataSource={dataSource}
        renderRow={(data) => <ResultsRow {...data} />}
      />
    )
  }
}

var styles = StyleSheet.create({
});

export default ListResultsScene
