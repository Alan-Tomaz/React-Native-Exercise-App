import { FlatList, Text, View } from "react-native";
import styles from "./style";
import { ExerciseInterface } from "@/src/model/ExerciseInterface";
import { gifsMap } from "@/src/utils/gifsMap";
import {Image} from 'expo-image';
import { useEffect, useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

function ExerciseSelect ({exercises, capitalizeWords, muscularGroup, setMuscularGroup}: {exercises: ExerciseInterface[], capitalizeWords: (text: string) => string, muscularGroup: string, setMuscularGroup: any}) {

    /* GET MUSCULAR GROUP TYPES */
  let allMuscularGroups : string[] = ['all'];

 exercises.map((exercise: ExerciseInterface) => {
  const target = exercise.target;
    if(!allMuscularGroups.includes(target)) {
      allMuscularGroups.push(target)
    }
  })

  const muscularGroupSelectList = allMuscularGroups.map((muscularGroup:string) => {return {label: capitalizeWords(muscularGroup), value: muscularGroup}})
    
return (
   <View style={styles.dropdownContainer}>
      <Dropdown
        style={styles.dropdown}
        data={muscularGroupSelectList}
        labelField="label"
        valueField="value"
        value={muscularGroup}
        autoScroll={false}
        onChange={(item: any) => {
          setMuscularGroup(item.value)
        }}
      />
      {/* {muscularGroup && <Text style={styles.dropdownResult}>{muscularGroup}</Text>} */}
    </View>
)
}
export default ExerciseSelect