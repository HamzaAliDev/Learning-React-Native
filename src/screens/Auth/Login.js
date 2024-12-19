import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Login() {
  return (
    <>
    <View style={styles.flexContainer}>
        <View>
            <Text style={styles.text}>Welcome</Text>
            <Text>to the Postify</Text>
        </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    flexContainer:{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
 
     },
     text:{
        fontSize: 30,
        fontWeight: 600,
        fontFamily: "Roboto"

     }
})