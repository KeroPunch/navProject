import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

function HomeScreen({navigation,route}) {
  React.useEffect(()=>){}
}

function CreatePostScreen() {

    
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#008b8b" },
          headerTintColor: "#ffff",
          headerTitleStyle: { fontWeight: "bold", fontSize: 30 },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
