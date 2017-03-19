import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Title from '../components/Title'
import EditQueryContainer from '../containers/EditQueryContainer'

const EditQueryScene = (): React$Element<any> => {
  return (
    <View style={styles.container}>
      <EditQueryContainer nextScreen={Actions.results} />
    </View>
  )
}

export default EditQueryScene

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
