import { View, Image, Text, StyleSheet, ScrollView } from "react-native";

import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";

const MealDeatailScreen = ({ route }) => {
  const mealId = route.params.mealID;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <MealDetails
        duration={selectedMeals.duration}
        complexity={selectedMeals.complexity}
        affordability={selectedMeals.affordability}
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterConatainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List
            data={
              selectedMeals.ingredients
            } /*map is use towise thats why we seperate that map to reusable component*/
          />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeals.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDeatailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 25,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterConatainer: {
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  },
});
