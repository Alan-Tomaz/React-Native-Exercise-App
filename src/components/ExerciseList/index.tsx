import { FlatList, Image, Text, View } from "react-native";
import styles from "./style";
import { ExerciseInterface } from "@/src/model/ExerciseInterface";

function ExerciseList ({exercises}: {exercises: ExerciseInterface[]}) {
    
return (
    <FlatList
      data={exercises}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.gifUrl }} style={styles.image} />
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.subtitle}>{item.bodyPart}</Text>
        </View>
      )}
    />
)
}
export default ExerciseList