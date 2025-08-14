import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants/colors'

function ScreenContainer({children}: {children: ReactNode}) {
  return (
  <View style={styles.container}>
{children}
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    padding: 30,
    paddingTop: 100,
    paddingBottom: 0,
    backgroundColor: colors.background,
    }
})

export default ScreenContainer
