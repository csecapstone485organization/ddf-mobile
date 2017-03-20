import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  middle: {
    flex: 1,
  },
  lastRan: {
    fontSize: 12,
  }
});

const QueryRow = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}
      onPress={props.onPress}
      >
      {props.label}
    </Text>
    <View style={styles.middle} />
    <Text style={styles.lastRan}
      onPress={props.onPress}
      >
      Last ran: {props.lastRan.toUTCString()}
    </Text>
  </View>
);

export default QueryRow;
