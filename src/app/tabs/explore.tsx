import ScreenContainer from '@/src/components/ScreenContainer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ExploreComponent() {
  return (
    <ScreenContainer>
        <Text>Explorer</Text>
    </ScreenContainer>
  )
}

export default ExploreComponent

const styles = StyleSheet.create({
    container: {
      padding: 0,
        flex: 1
    }
})
