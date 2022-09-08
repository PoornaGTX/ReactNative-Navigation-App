import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
//entire app eka navigateble wenna ona nisa app js eka import karnawa

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" }, //title backgorund color
            headerTintColor: "white", //title color
            contentStyle: {
              backgroundColor: "#351401",
            } /*backgroud color screen*/,
            //Stack.Navigator option dammama defualt style ekak wage hama screen ekatama add wenawa
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealsOverView"
            component={MealsOverViewScreen}
            // options={({ route, navigation }) => {
            //   //CategoriesScreen eka navigation prop eke data eka methanin access karanna puluwan
            //   const catID = route.params.categoryId;

            //   return {
            //     title: catID,
            //   }; //return options like we use in Stack.Navigator
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
