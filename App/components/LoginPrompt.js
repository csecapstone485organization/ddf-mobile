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
        <View style={styles.button}>
			<Button onPress={() => nextScreen()}
			title='Login'
			accessibilityLabel='Login'>
			Login
			</Button>
		</View>
    </View>
  )
}

const styles = StyleSheet.create({
    loginContent: {
        flex: 1,
		flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
	button: {
		width: 100,
		height: 30,
	},
    textBox: {
		textAlign: 'center',
        width: 200,
        height: 80,
		fontSize: 30
    }
});


export default LoginPrompt
