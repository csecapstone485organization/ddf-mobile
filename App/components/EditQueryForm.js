import React, {Component} from 'react'
import { Button, ScrollView, View, Text, TextInput, StyleSheet, TouchableHighlight } from 'react-native'
import { Select, Option } from "react-native-chooser"
import t from 'tcomb-form-native'
import store from '../store/store'

type Props = {
  saveQuery: Function,
  fetchResults: Function,
  nextScreen: Function
}

class EditQueryForm extends Component {
  constructor(props) {
    super(props)
    // Enums for pickers
    const timeRangeMarker = t.enums({
      "Any":"Any",
      "After":"After",
      "Before":"Before",
      "Between":"Between"
    });

    const Federation = t.enums({
      "All Sources":"All Sources",
      "Specific Sources":"Specific Sources",
      "None":"None"
    });

    var fields = {
      queryText: t.String,
      matchCase: t.Boolean,
      timeRangeMarker: timeRangeMarker,
      locationSearch: t.Boolean,
      type: t.maybe(t.String),
      federation: Federation
    }

    var Query = t.struct(fields);

    const value={
      timeRangeMarker: "Any",
      federation:"All Sources"
    }
    this.state = {
      value,
      type: Query,
      fields
    }
  }

  // returns the suitable type based on the form value
  getType(value) {
    if (value.country === 'IT') {
      return t.struct({
        country: Country,
        rememberMe: t.Boolean
      });
    } else if (value.country === 'US') {
      return t.struct({
        country: Country,
        name: t.String
      });
    } else {
      return t.struct({
        country: Country
      });
    }
  }

  createFormFromState(state, values) {
    newForm = {}
    newForm.queryText = state.fields.queryText
    newForm.matchCase = state.fields.matchCase
    newForm.timeRangeMarker= state.fields.timeRangeMarker
    if(values.timeRangeMarker === "After" || values.timeRangeMarker === "Between") {
      newForm.timeRangeAfter = t.maybe(t.Date)
    }
    if(values.timeRangeMarker === "Before" || values.timeRangeMarker === "Between") {
      newForm.timeRangeBefore = t.maybe(t.Date)
    }
    newForm.locationSearch = state.fields.locationSearch
    if(values.locationSearch === true) {
      newForm.longitude = t.maybe(t.Number)
      newForm.langitude = t.maybe(t.Number)
    }
    newForm.type = state.fields.type
    newForm.federation = state.fields.federation

    return t.struct(newForm)
  }

  onChange(value) {
    var type = {};
    type = this.createFormFromState(this.state, value);
    this.setState({ ...this.state, value, type });
  }

  render() {
    var Form = t.form.Form
    var options = {}; // optional rendering options (see documentation)

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
      <View style={styles.container}>
        <ScrollView>
        <Form
          ref="form"
          type={this.state.type}
          options={options}
          onChange={this.onChange.bind(this)}
          value={this.state.value}
        />
        <TouchableHighlight style={styles.button} onPress={onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default EditQueryForm
