import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TimeDisplayer from '../components/TimeDisplayer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#E3E3E3',
    borderBottomWidth: 1
  },
  middle: {
    flex: 1,
  },
  text: {
    fontSize: 16,
  }
});

const DetailTimeRow = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.label}
    </Text>
    <View style={styles.middle} />
    <TimeDisplayer style={styles.text} time={props.info}/>
  </View>
);

export default DetailTimeRow;
