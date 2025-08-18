import { FlatList, Text, View } from "react-native";
import styles from "./styles";
import { ExerciseInterface } from "@/src/model/ExerciseInterface";
import { gifsMap } from "@/src/utils/gifsMap";
import {Image} from 'expo-image';
import Button from "../Button";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { colors } from "@/src/constants/colors";

const STORAGE_KEY_EXERCISES = "@addedExercises";

function ExerciseList ({exercises, capitalizeWords}: {exercises: ExerciseInterface[], capitalizeWords: (text: string) => string}) {

/* USER EXERCISES SAVED IN MEMORY */
    const [addedExercises, setAddedExercises] = useState<ExerciseInterface[]>([]);

  /* GET THE EXERCISE GIF */
    const handleGetExerciseGif = (gifName: string) => {
const gifNameWithHiphen = gifName.toLowerCase().replace(/[^a-z0-9]/g, "-");
  const gifSource = gifsMap[gifNameWithHiphen];
  if (!gifSource) return null;
  return <Image source={gifSource} style={styles.image} autoplay />
  }

  /* ADD OR REMOVE EXERCISES TO SMARTPHONE MEMORY */
  const handleExercise = (exercise: ExerciseInterface) => {
    let updated: ExerciseInterface[];
    if (addedExercises.find((ex: ExerciseInterface) => ex.id === exercise.id)) {
     updated = addedExercises.filter(ex => ex.id !== exercise.id);
    }
else {
   updated = [...addedExercises, exercise];
  }
  setAddedExercises(updated);
  AsyncStorage.setItem(STORAGE_KEY_EXERCISES, JSON.stringify(updated));
  };

/* GET SAVED DATA FROM ASYNC STORAGE */
  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY_EXERCISES).then((savedExercises) => {
     if (savedExercises) setAddedExercises(JSON.parse(savedExercises));
    });
  }, []);
    
return (
   <FlatList
      data={exercises}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          {handleGetExerciseGif(item.name)}
          <View style={styles.actionContent}>
          <Text style={styles.title}>{capitalizeWords(item.name)}</Text>
          <Button text={addedExercises.find((ex: ExerciseInterface) => ex.id === item.id) ? 'Remove Exercise' : 'Add Exercise'} onPress={() => handleExercise(item)}  style={addedExercises.find((ex: ExerciseInterface) => ex.id === item.id) && {backgroundColor: '#ffffff', borderWidth: 2, borderColor: colors.buttonPrimary}} textStyle={addedExercises.find((ex: ExerciseInterface) => ex.id === item.id) && {color: colors.buttonPrimary, fontWeight: 600}} />
          </View>
        </View>
      )}
    /> 
)
}
export default ExerciseList