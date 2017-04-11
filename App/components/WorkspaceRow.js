import React from 'react';
import { TouchableWithoutFeedback, View, Text, StyleSheet, Image } from 'react-native';

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

function getTimeString(date)
{
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
}

const WorkspaceRow = (props) => (
  <TouchableWithoutFeedback
      onPress={props.onPress}>
  <View style={styles.container}>
    <Text style={styles.title}>
      {props.title}
    </Text>
    <View style={styles.footer}>
      <Text style={styles.desc}>
        {props.queries} queries
      </Text>
      <Text style={styles.desc}>
        {getTimeString(new Date(props.modified))}
      </Text>
    </View>
  </View>
  </TouchableWithoutFeedback>
);

export default WorkspaceRow;
