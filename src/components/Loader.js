import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

export default function Loader() {
  return (
    <View style={styles.flexContainer}>
        <View>
            <Image source={require('../assets/images/logo.png')} style={{width:230, height:230}} />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    flexContainer:{
       flex: 1,
       backgroundColor: "white",
       justifyContent: "center",
       alignItems: "center",

    },
})