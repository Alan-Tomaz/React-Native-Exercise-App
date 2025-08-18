import Button from '@/src/components/Button'
import MotivacionalQuote from '@/src/components/MotivacionalQuotes'
import ScreenContainer from '@/src/components/ScreenContainer'
import { colors } from '@/src/constants/colors'
import { ExerciseHistoryInterface, ExerciseInterface } from '@/src/model/ExerciseInterface'
import { gifsMap } from '@/src/utils/gifsMap'
import { capitalizeWords } from '@/src/utils/handleWords'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { format } from 'date-fns'
import { Image } from 'expo-image'
import { useFocusEffect } from 'expo-router'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const STORAGE_KEY_EXERCISES = "@addedExercises";
const STORAGE_KEY_EXERCISES_HISTORY = "@exerciseHistory";

function HomeComponent() {
/* USER EXERCISES SAVED IN MEMORY */
    const [addedExercises, setAddedExercises] = useState<ExerciseInterface[]>([]);
    const [exercisesHistory, setExercisesHistory] = useState<ExerciseHistoryInterface>({});

    const today: string = format(new Date(), "yyyy-MM-dd");


  /* GET THE EXERCISE GIF */
    const handleGetExerciseGif = (gifName: string) => {
const gifNameWithHiphen = gifName.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const gifSource = gifsMap[gifNameWithHiphen];
  if (!gifSource) return null;
  return <Image source={gifSource} style={styles.image} autoplay />
  }

  /* ADD OR REMOVE EXERCISES TO SMARTPHONE MEMORY */
 const saveExerciseForToday =  (exercise: any) => {

let updatedHistory: ExerciseHistoryInterface = {}; 
    // Se já existe a lista de hoje, adiciona. Senão, cria nova
    if(exercisesHistory[today])  {
if(exercisesHistory[today].find((ex: ExerciseInterface) => ex.id === exercise.id)) {
  updatedHistory = {
      ...exercisesHistory,
      [today]: [...exercisesHistory[today].filter((ex: ExerciseInterface) => ex.id !== exercise.id)], 
    };
} else {
    updatedHistory = {
      ...exercisesHistory,
      [today]: [...(exercisesHistory[today] || []), exercise], 
    };
}
    } else {
    updatedHistory = {
      ...exercisesHistory,
      [today]: [...(exercisesHistory[today] || []), exercise], 
    };
  }

    setExercisesHistory(updatedHistory)
    AsyncStorage.setItem("@exerciseHistory", JSON.stringify(updatedHistory));
};

/* GET SAVED DATA FROM ASYNC STORAGE */
  useFocusEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY_EXERCISES).then((savedExercises) => {
     if (savedExercises) setAddedExercises(JSON.parse(savedExercises));
    });
  });

   useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY_EXERCISES_HISTORY).then((historyExercises) => {
     if (historyExercises) setExercisesHistory(JSON.parse(historyExercises));
    });
  });
    

  return (
    <ScreenContainer>
        <FlatList
            data={addedExercises}
            keyExtractor={(item) => item.id}
             ListHeaderComponent={
      <View  style={styles.container}>
         <Text style={styles.title}>Today's Training</Text>
        <MotivacionalQuote style={styles.subTitle}/>
      </View>
    }
            renderItem={({ item }) => (
              <View style={[styles.card]}>
                {handleGetExerciseGif(item.name)}
                <View style={styles.actionContent}>
                <Text style={styles.cardTitle}>{capitalizeWords(item.name)}</Text>
               <Button text={exercisesHistory[today] ? exercisesHistory[today].find((ex: ExerciseInterface) => ex.id === item.id) ? 'Done' : 'Pending' : 'Pending'} onPress={() => saveExerciseForToday(item)} style={exercisesHistory[today] ? exercisesHistory[today].find((ex: ExerciseInterface) => ex.id === item.id) ? {backgroundColor: '#ffffff', borderWidth: 2, borderColor: colors.buttonPrimary} : {} : {}} textStyle={exercisesHistory[today] && exercisesHistory[today].find((ex: ExerciseInterface) => ex.id === item.id) && {color: colors.buttonPrimary, fontWeight: 600}} />
                </View>
              </View>
            )}
          /> 
    </ScreenContainer>
  )
}

export default HomeComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
flexDirection: 'column',
paddingRight: 0,
paddingLeft: 0,
  },
    title: {
      marginTop: 70,
      fontSize: 36,
      fontWeight: '700',
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 20,
       opacity: .7, 
       textAlign: 'center',
       paddingRight: 20,
paddingLeft: 20,
marginBottom: 20,
marginTop: 25
    },
     card: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    columnGap: 30,
    margin: 8,
    borderRadius: 10,
    elevation: 2,
    marginLeft: 20,
    marginRight: 20,
  },
  actionContent: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    flex: 1,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 8,
  },
  cardTitle: { fontSize: 18, fontWeight: "bold", marginTop: 8 },
})
