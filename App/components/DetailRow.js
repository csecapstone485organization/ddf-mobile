import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  }
});

const DetailRow = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {props.label}
    </Text>
    <Text style={styles.text}>
      {props.info}
    </Text>
  </View>
);

export default DetailRow;
