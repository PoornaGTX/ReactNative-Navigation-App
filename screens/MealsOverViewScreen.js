import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../components/MealItem";
import { CATEGORIES, MEALS } from "../data/dummy-data";

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

  const renderMealItem = (itemData) => {
    //props godak yawana nis lesi wenna
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
