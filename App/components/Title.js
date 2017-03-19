import React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  children?: string,
}

const Title = (props: Props): React$Element<any> => {
  const children = props.children || ''
  return (
    <Text
      selectable={true}
      style={styles.main}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
  },
})

export default Title
