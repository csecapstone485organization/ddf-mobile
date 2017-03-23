import React from 'react'
import { Button, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import store from '../store/store'

type Props = {
    saveQuery: Function,
    fetchResults: Function,
    nextScreen: Function
}

const renderInput = ({ input: { onChange, ...restInput }}) => {
  return <TextInput style={styles.input} onChangeText={onChange} {...restInput} />
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
    <View style={styles.container}>
      <Text>Text:</Text>
      <Field name="text" component={renderInput} />
      <Text>Location:</Text>
      <Field name="location" component={renderInput} />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.button}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  container: {

  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  }
})

EditQueryForm = reduxForm({
  form: 'queryForm' // a unique name for this form
})(EditQueryForm);

export default EditQueryForm
