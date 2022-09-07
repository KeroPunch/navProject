import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button title="Go to Setting" onPress={()=>navigation.navigate("Setting")}/>
    </View>
  );
}

function SettingScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Setting!</Text>
      <Button title="Go to Home" onPress={()=>navigation.navigate("Home")}/>
    </View>
  );
}
const Tab = createBottomTabNavigator();

function MyTap() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyTap />
    </NavigationContainer>
  );
};

export default App;
