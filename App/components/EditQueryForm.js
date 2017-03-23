import React from 'react'
import { Button, View, Text, TextInput, Picker, StyleSheet } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import store from '../store/store'

type Props = {
  saveQuery: Function,
  fetchResults: Function,
  nextScreen: Function
}

const EditQueryForm = (props: Props) => {
  const { fetchResults, nextScreen } = props

  const onPress = () => {
    // TODO: Uncomment fetchResults; should not run nextScreen until results received
    // fetchResults();
    console.log(fetchResults);
    fetchResults("bleh");
    // Move to async call
    nextScreen();
  }

  return (
  <View style={styles.QueryInputContainer}>
    <TextInput style={styles.TextInputStyle} placeholder={'Query Text'}/>
    <Picker>
      <Picker.Item label="Select Match Case Type" value="0" />
      <Picker.Item label="Yes" value="yes" />
      <Picker.Item label="No" value="no" />
    </Picker>
    <Picker>
      <Picker.Item label="Select Time Range Type" value="0" />
      <Picker.Item label="Any" value="any" />
      <Picker.Item label="After" value="after" />
      <Picker.Item label="Before" value="before" />
      <Picker.Item label="Between" value="between" />
    </Picker>
    <Picker>
      <Picker.Item label="Select Location Type" value="0" />      
      <Picker.Item label="Anywhere" value="anywhere" />
      <Picker.Item label="Somewhere Specific" value="somewhereSpecific" />
    </Picker>
    <Picker>
      <Picker.Item label="Select Match Type" value="0" />     
      <Picker.Item label="Any" value="any" />
      <Picker.Item label="Specific" value="specific" />
    </Picker>
    <Picker>
      <Picker.Item label="Select Sort Attribute Type" value="0" />        
    </Picker>
    <Picker>
      <Picker.Item label="Select Sort Direction Type" value="0" />        
    </Picker>
    <View style={styles.buttons}>
    <Button onPress={onPress}
      title='Save'
      accessibilityLabel='Submit'>
      Submit
    </Button>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  QueryInputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  TextInputStyle: {
    height: 80,
    fontSize: 20,
    textAlign: 'center',
  },
  buttons: {
    alignSelf: 'center',
    width: 300,
    height: 100,
  },
  labels: {
    height: 20,
  },
})

EditQueryForm = reduxForm({
  form: 'queryForm' // a unique name for this form
})(EditQueryForm);

export default EditQueryForm
