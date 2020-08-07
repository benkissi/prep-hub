import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SetQuestions from "../screens/teacher/SetQuestions";

import DrawerIcon from "../components/DrawerIcon";

const Stack = createStackNavigator();

function SetQuestionsNavigator({navigation}) {
  return (
    <Stack.Navigator
      initialRouteName="Set Questions"
      headerMode="float"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name="Set Questions"
        component={SetQuestions}
        options={{ headerLeft: () => <DrawerIcon  navigation={navigation}/> }}
      />
    </Stack.Navigator>
  );
}

export default SetQuestionsNavigator;
