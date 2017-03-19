import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

type Props = {
    nextScreen: Function
}

const LoginPrompt = (props: Props) => {
  const { nextScreen } = props
  return (
    <View style={styles.loginContent}>
        <TextInput style={styles.textBox} placeholder={'Username'}/>
        <TextInput style={styles.textBox} placeholder={'Password'}/>
        <Button onPress={() => nextScreen()}
          title='Login'
          accessibilityLabel='Login'>
          Login
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    fieldLabel: {
        fontSize: 18
    },
    loginContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch'
    },
    textBox: {
        alignSelf: 'stretch',
        textAlign: 'center',
        width: 100,
        height: 60
    }
});


export default LoginPrompt
