import { FlatList, Text, TextInput, View } from "react-native";
import { ExerciseInterface } from "@/src/model/ExerciseInterface";
import { useEffect, useState } from "react";
import { styles } from "./styles";

function ExerciseSearch ({searchText, setSearchText}: {searchText: string, setSearchText: any}) {

    
return (
  <View style={styles.container}>
   <TextInput
        style={styles.searchInput}
        placeholder="Search exercises..."
        value={searchText}
        onChangeText={setSearchText}
      />
      </View> 
)
}
export default ExerciseSearch