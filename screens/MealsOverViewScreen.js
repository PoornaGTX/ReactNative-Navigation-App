import { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

const MealsOverViewScreen = ({ route, navigation }) => {
  //we got route prop because we register MealsOverViewScreen as a screen
  const categID = route.params.categoryId; // the data which is pass from the CategoryScreen

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categID) >= 0; //indexof() karanne meal ekakta ida 1kta wada thiyanwa api balanawa api hoyana id eka thiyanwada kiyala
    //return true or false
  });

  /* this is also like useEffect same process. but we use useLayoutEffect() in some senario becuse api 
screen eka update karnakota kalin thibba value eka penila itaa passe ne useEffect eka value eka watenne
enisa thama useLayoutEffect() use karanne eka nethi wenna. */

  useLayoutEffect(() => {
    //get the category title
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categID
    ).title;

    //options like we use in Stack.Navigator in App.js
    navigation.setOptions({ title: categoryTitle });
  }, [categID, navigation]);

  return <MealsList items={displayedMeals} />;
};

export default MealsOverViewScreen;
