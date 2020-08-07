import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Results from "../screens/teacher/Results";

import DrawerIcon from "../components/DrawerIcon";

const Stack = createStackNavigator();

function ResultsNavigator({ navigation }) {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen
        name="Results"
        component={Results}
        options={{ headerLeft: () => <DrawerIcon navigation={navigation} /> }}
      />
    </Stack.Navigator>
  );
}

export default ResultsNavigator;
