import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Categories from "./Categories";
import Options from "./Options"
import Questions from './Questions'

const Stack = createStackNavigator();

function Explore() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" component={Categories} options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
      }}/>
      <Stack.Screen name="Options" component={Options} options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
      }}/>
      <Stack.Screen name="Questions" component={Questions} options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
      }}/>
    </Stack.Navigator>
  );
}

export default Explore;
