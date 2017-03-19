import React from 'react'
import { Button, View, Text, TextInput, ScrollView, StyleSheet } from 'react-native'

type Props = {
    nextScreen: Function
}

const EditQueryForm = (props: Props) => {
  const { nextScreen } = props
  return (
    <ScrollView style={styles.listContent}>
        <Text style={styles.fieldLabel}>Text</Text>
        <TextInput style={styles.textBox}/>
        <Text style={styles.fieldLabel}>Time</Text>
        <TextInput style={styles.textBox}/>
        <Text style={styles.fieldLabel}>Location</Text>
        <TextInput style={styles.textBox}/>
        <Text style={styles.fieldLabel}>Sorting</Text>
        <TextInput style={styles.textBox}/>
        <Button
          onPress={() => nextScreen()}
          title='Submit Query'
          accessibilityLabel='Submit Query'>
          Submit Query
        </Button>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    fieldLabel: {
        fontSize: 18
    },
    textBox: {
        alignSelf: 'stretch',
        width: 100,
        height: 60
    }
});

export default EditQueryForm
