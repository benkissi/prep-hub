import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Assessment from "../screens/teacher/Assessment";
import Results from "../screens/teacher/Results"

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
        component={Results}
      />
    </Stack.Navigator>
  );
}

export default AssessmentNavigator;
