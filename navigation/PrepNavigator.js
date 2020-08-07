import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Subjects from "../screens/prep/Subjects";
import Options from "../screens/prep/Options"
import Questions from '../screens/prep/Questions'
import Score from '../screens/prep/Score'

const Stack = createStackNavigator();

function PrepNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Subjects" component={Subjects} options={{
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
      <Stack.Screen name="Score" component={Score} options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
      }}/>
    </Stack.Navigator>
  );
}

export default PrepNavigator;
