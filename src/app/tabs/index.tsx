import MotivacionalQuote from '@/src/components/MotivacionalQuotes'
import ScreenContainer from '@/src/components/ScreenContainer'
import { colors } from '@/src/constants/colors'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function HomeComponent() {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Treino De Hoje</Text>
        <MotivacionalQuote style={styles.subTitle}/>
        </View>
    </ScreenContainer>
  )
}

export default HomeComponent

const styles = StyleSheet.create({
  container: {
alignItems: 'center',
flexDirection: 'column',
gap: 8
  },
    title: {
      fontSize: 36,
      fontWeight: '700',
    },
    subTitle: {
      fontSize: 20,
       opacity: .7, 
       textAlign: 'center'

    }
})
