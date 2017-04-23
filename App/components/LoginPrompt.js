import React from 'react'
import { View,Image, TextInput, Button, StyleSheet } from 'react-native'

type Props = {
  nextScreen: Function
}

const LoginPrompt = (props: Props) => {
  const { nextScreen } = props
  return (
    <View style={styles.loginContent}>
      <Image source={require('../resources/images/ddf_logo.png')}
          style={styles.image}
      />
      <TextInput style={styles.textBox} placeholder={'Username'}/>
      <TextInput style={styles.textBox} placeholder={'Password'}/>
      <View style={styles.button}>
        <Button onPress={() => nextScreen()}
          title='Login'
          accessibilityLabel='Login'
          color="#414770"
          >
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
    backgroundColor:'#DCE0D9'
  },
  textBox: {
    textAlign: 'left',
    width: 350,
    height: 50,
    fontSize: 30,
    color:'black',
    paddingLeft: 25,
    paddingRight: 25
  },
  image: {
    width:261,
    height:112,
    marginBottom: 40
  }
});


export default LoginPrompt
