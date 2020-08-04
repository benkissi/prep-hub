import "react-native-gesture-handler";
import React, { useReducer } from "react";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import {useFonts, Raleway_100Thin, Raleway_400Regular, Raleway_700Bold} from '@expo-google-fonts/raleway'

import Navigator from "./navigation/app-navigator";
import { AppContext } from "./store/app-context";
import Reducer from "./store/app-reducer";
import INITIAL_SATE from "./store/store";

export default function App() {
  const [store, dispatch] = useReducer(Reducer, INITIAL_SATE);
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_400Regular,
    Raleway_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </AppContext.Provider>
  );
}
