import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function HomeComponent() {
  return (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
  )
}

export default HomeComponent

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
