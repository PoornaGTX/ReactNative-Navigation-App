import { View, FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

//optional

//navigation prop eka reseve wenne App.js screen stack (screen component) eken

const CategoriesScreen = ({ navigation }) => {
  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverView");
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        pressProp={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
