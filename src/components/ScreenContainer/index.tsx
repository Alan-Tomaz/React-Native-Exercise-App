import { colors } from '@/src/constants/colors'
import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

function ScreenContainer({children}: {children: ReactNode}) {

  return (
  <View style={[styles.container]}>
{children}
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    backgroundColor: colors.background,
/*     paddingTop: 70
 */    }
})

export default ScreenContainer
