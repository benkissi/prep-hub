import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Results from '../screens/teacher/Results'

const Stack = createStackNavigator();

function ResultsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Results" component={Results}/>
    </Stack.Navigator>
  );
}

export default ResultsNavigator;
