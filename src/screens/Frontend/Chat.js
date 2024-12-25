import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Chat() {
  return (
    <View style={styles.container}>
    <Text style={styles.text}>This feature is Coming Soon!</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        fontSize: 16,
        marginTop: 35,
        textAlign: "center"
    },
})