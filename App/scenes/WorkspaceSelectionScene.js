import React, { Component } from 'react'
import { ListView, Text, View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import MapView from 'react-native-maps';

class ResultsContainer extends Component<void, void, void> {
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
      <View style={styles.container}>
        <ListView
            dataSource={dataSource}
            renderRow={(rowData) => <Text>{rowData.label}</Text>}/>
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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default ResultsContainer
