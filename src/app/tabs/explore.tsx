import ExerciseList from '@/src/components/ExerciseList';
import ScreenContainer from '@/src/components/ScreenContainer'
import { ExerciseInterface } from '@/src/model/ExerciseInterface';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import exercisesData from '@/assets/json/exercises.json';
import ExerciseSelect from '@/src/components/ExerciseSelect';
import ExerciseSearch from '@/src/components/ExerciseSearch';
import { capitalizeWords, lowerCaseWords } from '@/src/utils/handleWords';

function ExploreComponent() {

    const [exercises, setExercises] = useState<ExerciseInterface[]>([]);
    const [exercisesToShow, setExercisesToShow] = useState(exercises);
    const [searchText, setSearchText] = useState("");
    const [muscularGroup,setMuscularGroup] = useState('all');

  useEffect(() => {
    setExercises(exercisesData);
  }, []);

      /* CHANGE THE MUSCULAR GROUP TO BE LISTED */
useEffect(() => {

   const regex = new RegExp(searchText, "i");

   const filtered = exercises.filter((exercise) => regex.test(lowerCaseWords(exercise.name)));

  if (muscularGroup === 'all') {
    setExercisesToShow(filtered);
  } else {
    setExercisesToShow(filtered.filter(e =>  e.target === muscularGroup))
}
}, [muscularGroup, searchText, exercises]);
  
  return (
      <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Explore Exercises</Text>
        <View style={styles.exerciseContent}>
          {/* SEARCH */}
          <ExerciseSearch searchText={searchText} setSearchText={setSearchText} />
          {/* SELECT */}
          <ExerciseSelect exercises={exercises}  capitalizeWords={capitalizeWords}  muscularGroup={muscularGroup} setMuscularGroup={setMuscularGroup}/>
          {/* LIST */}
          <ExerciseList exercises={exercisesToShow} capitalizeWords={capitalizeWords}/>
        </View>
      </View>
    </ScreenContainer>
  )
}

export default ExploreComponent

const styles = StyleSheet.create({
  container: {
flexDirection: 'column',
gap: 30,
paddingRight: 0,
paddingLeft: 0,
paddingBottom: 420,
  },
  exerciseContent: {
    /* paddingBottom: 50, */
flexDirection: 'column',
gap: 15,
  },
    title: {
      marginTop: 70,
      fontSize: 36,
      fontWeight: '700',
      textAlign: 'center'
    },
    subTitle: {
      fontSize: 20,
       opacity: .7, 
       textAlign: 'center'

    }
})