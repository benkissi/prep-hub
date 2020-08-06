import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useSelector } from "react-redux";
import Auth from "../screens/auth/Auth";
import Prep from "../screens/prep/Prep.js";
import Scores from "../screens/scores/Scores"

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Navigator() {

  const { loggedIn } = useSelector((store) => store.user);
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
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Prep" component={Prep} />
          <Tab.Screen name="Scores" component={Scores} />
        </Tab.Navigator>
      )}
      
    </>
  );
}

export default Navigator;
