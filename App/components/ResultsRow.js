import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    borderColor: '#E3E3E3',
    borderBottomWidth: 1
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 16
  },
  desc: {
    fontSize: 10
  }
});


export default class ResultsRow extends Component {

  render() {
    return (
      <TouchableWithoutFeedback
          onPress={this.props.onPress}>
        <View style={styles.container}>
          <Text style={styles.title}>
            {this.props.rowData.metacard.properties.title}
          </Text>
          <View style={styles.footer}>
            <Text style={styles.desc}>
              {this.props.rowData.metacard.type}
            </Text>
            <Text style={styles.desc}>
              {this.props.rowData.metacard.properties.created}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
