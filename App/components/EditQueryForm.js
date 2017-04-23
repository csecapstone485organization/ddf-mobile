import React, {Component} from 'react'
import { Button, View, Text, TextInput, StyleSheet } from 'react-native'
import { Field, reduxForm } from 'redux-form'
import { Select, Option } from "react-native-chooser"
import store from '../store/store'

type Props = {
  saveQuery: Function,
  fetchResults: Function,
  nextScreen: Function
}

class EditQueryForm extends Component {

  render() {
    const { fetchResults, nextScreen } = this.props

    const onPress = () => {
      // TODO: Uncomment line below to run fetchResults action for async calls.
      // Currently configured to fetch results from Reddit's API for testing purposes.
      // But can be edited in Actions.js to hit working endpoint.

      // fetchResults("bleh");
      // console.log(fetchResults);
      // Move to async call

      nextScreen();
    }


    return (
      <View style={styles.Container}>
        <TextInput style={styles.TextInputStyle} placeholder={'Query Text'}/>
        <Select
          //onSelect = {this.onSelect.bind(this)}
          defaultText  = "Match Case?"
          style = {styles.Select}
          textStyle = {{}}
          backdropStyle  = {{backgroundColor : "#d3d5d6"}}
          optionListStyle = {{backgroundColor : "#F5FCFF"}}>
          <Option value = "Yes">Yes</Option>
          <Option value = "No">No</Option>
        </Select>
        <View style={{height: 50}} />
        <Select
          //onSelect = {this.onSelect.bind(this)}
          defaultText  = "Time Range?"
          style = {styles.Select}
          textStyle = {{}}
          backdropStyle  = {{backgroundColor : "#d3d5d6"}}
          optionListStyle = {{backgroundColor : "#F5FCFF"}}>
          <Option value = "Any">Any</Option>
          <Option value = "After">After</Option>
          <Option value = "Before">Before</Option>
          <Option value = "Between">Between</Option>
        </Select>
        <View style={{height: 50}} />
        <Select
          //onSelect = {this.onSelect.bind(this)}
          defaultText  = "Located?"
          style = {styles.Select}
          textStyle = {{}}
          backdropStyle  = {{backgroundColor : "#d3d5d6"}}
          optionListStyle = {{backgroundColor : "#F5FCFF"}}>
          <Option value = "Anywhere">Anywhere</Option>
          <Option value = "Somewhere Specific">Somewhere Specific</Option>
        </Select>
        <View style={{height: 50}} />
        <Select
          //onSelect = {this.onSelect.bind(this)}
          defaultText  = "Match Types?"
          style = {styles.Select}
          textStyle = {{}}
          backdropStyle  = {{backgroundColor : "#d3d5d6"}}
          optionListStyle = {{backgroundColor : "#F5FCFF"}}>
          <Option value = "Any">Any</Option>
          <Option value = "Specific">Specific</Option>
        </Select>
        <View style={{height: 50}} />
        <View style={styles.Button}>
          <Button onPress={onPress}
            title='Save'
            accessibilityLabel='Submit'>
            Submit
          </Button>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Select: {
    height: 40,
  },
  TextInputStyle: {
    height: 80,
    width: 200,
    fontSize: 20,
    textAlign: 'center',
  },
  Button: {
    height: 80,
    width: 200,
  },
})

EditQueryForm = reduxForm({
  form: 'queryForm' // a unique name for this form
})(EditQueryForm);

export default EditQueryForm
