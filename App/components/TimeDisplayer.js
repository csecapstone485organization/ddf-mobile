import React, {Component} from 'react';
import { View, Text } from 'react-native';
var moment = require('moment');

export default class TimeDisplayer extends Component {
  render() {
    return (
      <Text style={this.props.style}>
        {moment(this.props.time).format("YYYY-MM-DD HH:mm:ss")}
      </Text>
    )
  }
}
