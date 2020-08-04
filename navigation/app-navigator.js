import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Auth from "../screens/auth/Auth";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <>
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
    </>
  );
}

export default Navigator;
