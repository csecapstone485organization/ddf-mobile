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

const WorkspaceRow = (props) => (
  <View style={styles.container}>
    <Text style={styles.text}
      onPress={props.onPress}
      >
      {props.label}
    </Text>
  </View>
);

export default WorkspaceRow;
