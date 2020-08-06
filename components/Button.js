import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function ButtonComp({ text, press }) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity activeOpacity={0.1} onPress={press} style={styles.opacity__wrapper}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#ff9769",
    overflow: "hidden",
  },

  opacity__wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontFamily: "Raleway_700Bold",
    color: "white",
  }

});

export default ButtonComp;
