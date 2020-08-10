import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Assessment from "../screens/teacher/Assessment";
import Scores from '../screens/scores/Scores'

import DrawerIcon from "../components/DrawerIcon";

const Stack = createStackNavigator();

function AssessmentNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Assessment"
      headerMode="float"
      screenOptions={{ headerTitleAlign: "center" }}
    >
      <Stack.Screen
        name="Assessment"
        component={Assessment}
        options={{ headerLeft: () => <DrawerIcon  navigation={navigation}/> }}
      />
      <Stack.Screen
        name="Results"
        component={Scores}
      />
    </Stack.Navigator>
  );
}

export default AssessmentNavigator;
