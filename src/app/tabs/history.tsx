import ScreenContainer from '@/src/components/ScreenContainer'
import { colors } from '@/src/constants/colors';
import { ExerciseHistoryInterface, ExerciseInterface } from '@/src/model/ExerciseInterface';
import { formatDate } from '@/src/utils/formatDate';
import { capitalizeWords } from '@/src/utils/handleWords';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from 'expo-router';
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const STORAGE_KEY_EXERCISES_HISTORY = "@exerciseHistory";

function HistoryComponent() {

  
  const [exercisesHistory, setExercisesHistory] = useState<ExerciseHistoryInterface>({});

     useFocusEffect(() => {
     AsyncStorage.getItem(STORAGE_KEY_EXERCISES_HISTORY).then((historyExercises) => {
     if (historyExercises) setExercisesHistory(JSON.parse(historyExercises));
    }); 
  })

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <FlatList
            data={Object.entries(exercisesHistory)}
            keyExtractor={([date]) => date}
             ListHeaderComponent={
        <Text style={styles.title}>Exercises History</Text>
    }
            renderItem={({ item }) => {
            const [date, exercises] = item;
            return (
              <>
              {exercises.length == 0 ?
              <>
              </>
              :
              <View style={[styles.card]}>
                <Text style={styles.listTitle}>{formatDate(date)}</Text>
                <Text style={styles.listContent}>{exercises.map((exercise: ExerciseInterface) => capitalizeWords(exercise.name)).join(', ')}</Text>
              </View>
            }
              </>
            )}}
          /> 
          </View>
    </ScreenContainer>
  )
}

export default HistoryComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
flexDirection: 'column',
gap: 30,
  },
    title: {
      marginTop: 70,
      fontSize: 36,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 30,
      paddingRight: 20,
paddingLeft: 20,
    },
    card: {
      borderRadius: 8,
      flex: 1,
      backgroundColor: colors.cardBackground,
      paddingRight: 20,
paddingLeft: 20,
paddingTop: 20,
paddingBottom: 20,
gap: 10,
marginTop: 8,
marginBottom: 8,
marginRight: 20,
marginLeft: 20
    },
    listTitle: {
           fontSize: 22,
      fontWeight: '700',
    },
    listContent: {
fontSize: 17
    }
})
