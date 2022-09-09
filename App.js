import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import "react-native-gesture-handler";

import { Ionicons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
//entire app eka navigateble wenna ona nisa app js eka import karnawa

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDeatailScreen from "./screens/MealDeatailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" }, //title backgorund color
        headerTintColor: "white", //title color
        sceneContainerStyle: {
          //stack eke contentStyle kiyala use karata sceneContainerStyle thami drawer eke use karanna ona
          backgroundColor: "#351401",
        },
        drawerContentStyle: {
          backgroundColor:
            "#351401" /* change the backgroud color of side bar */,
        },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

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
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen name="MealDetail" component={MealDeatailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
