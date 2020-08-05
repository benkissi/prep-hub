import "react-native-gesture-handler";
import React from "react";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Raleway_100Thin,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Navigator from "./navigation/app-navigator";

export default function App() {
  let [fontsLoaded] = useFonts({
    Raleway_100Thin,
    Raleway_400Regular,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
}
