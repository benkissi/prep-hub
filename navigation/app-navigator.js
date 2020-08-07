import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { useSelector } from "react-redux";
import Auth from "../screens/auth/Auth";
import PrepNavigator from "./PrepNavigator.js";
import Scores from "../screens/scores/Scores";
import SetQuestionsNavigator from "./SetQuestionsNavigator"
import ResultsNavigator from "./ResultsNavigator"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Navigator() {
  const { loggedIn, type } = useSelector((store) => store.user);
  return (
    <>
      {loggedIn ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{
              headerShown: false,
              gestureEnabled: true,
              gestureDirection: "horizontal",
            }}
          />
        </Stack.Navigator>
      ) : type === "student" ? (
        <Tab.Navigator>
          <Tab.Screen name="Prep" component={PrepNavigator} />
          <Tab.Screen name="Scores" component={Scores} />
        </Tab.Navigator>
      ) : (
        <Drawer.Navigator initialRouteName="Set Questions"
        options={{
          headerShown: true,
          gestureDirection: "horizontal",
        }}
        >
          <Drawer.Screen name="Set Questions" component={SetQuestionsNavigator} />
          <Drawer.Screen name="Results" component={ResultsNavigator} />
        </Drawer.Navigator>
      )}
    </>
  );
}

export default Navigator;
