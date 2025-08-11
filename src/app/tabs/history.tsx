import ScreenContainer from '@/src/components/ScreenContainer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function HistoryComponent() {
  return (
    <ScreenContainer>
        <Text>Histórico</Text>
    </ScreenContainer>
  )
}

export default HistoryComponent

const styles = StyleSheet.create({
    container: {
        padding: 0,
        flex: 1
    }
})
