import MotivacionalQuote from '@/src/components/MotivacionalQuotes'
import ScreenContainer from '@/src/components/ScreenContainer'
import { colors } from '@/src/constants/colors'
import { useLoading } from '@/src/state/LoadingContext'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { RAPIDAPI_KEY, RAPIDAPI_URL } from '@env';
import { ExerciseInterface } from '@/src/model/ExerciseInterface'

function HomeComponent() {

  const [exercises, setExercises] = useState([]);

  const {startLoading, stopLoading} = useLoading();

   useEffect(() => {
    /* START LOADING */
    startLoading();
    /* GET GYM EXERCISES */
        fetch(`https://${RAPIDAPI_URL}/exercises/bodyPart/chest?limit=10`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': RAPIDAPI_KEY,
              'X-RapidAPI-Host': RAPIDAPI_URL,
            },
          }
        )
        .then((response) => response.json())
        .then((data) => {
          /* GET EXERCISES GIF */
          const newData = data.map((exercise: ExerciseInterface) => 
          fetch(`https://${RAPIDAPI_URL}/image?exerciseId=${exercise.id}&resolution=${'180'}&rapidapi-key=${RAPIDAPI_KEY}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': RAPIDAPI_KEY,
              'X-RapidAPI-Host': RAPIDAPI_URL,
            }
          }
        )
        .then((imageData) => console.log(imageData))
        .catch(error => {
        console.error(error)
      })
        )}
      )
      .catch(error => {
        console.error(error)
      }) 
      .finally(() => {
        /* END LOADING */
        stopLoading()
      })
  }, []);

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
