import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import TimeDisplayer from '../components/TimeDisplayer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    borderColor: '#E3E3E3',
    borderBottomWidth: 1
  },
  text: {
    fontSize: 16,
  },
  middle: {
    flex: 1,
  },
  lastRan: {
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

const QueryRow = (props) => (
  <TouchableWithoutFeedback
      onPress={props.onPress}>
    <View style={styles.container}>
      <Text style={styles.text}>
        {props.label}
      </Text>
      <View style={styles.footer}>
        <View style={styles.middle}/>
        <TimeDisplayer style={styles.lastRan} time={props.lastRan}/>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

export default QueryRow;
