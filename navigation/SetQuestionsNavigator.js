import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SetQuestions from '../screens/teacher/SetQuestions'

const Stack = createStackNavigator();

function SetQuestionsNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Set Questions" component={SetQuestions}/>
    </Stack.Navigator>
  );
}

export default SetQuestionsNavigator;
