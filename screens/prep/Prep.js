import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Subjects from "./Subjects";
import Options from "./Options"
import Questions from './Questions'
import Score from './Score'

const Stack = createStackNavigator();

function Prep() {
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

export default Prep;
