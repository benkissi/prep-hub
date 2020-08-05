import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Card({ children, color }) {
  return <View style={{...styles.wrapper, backgroundColor: color}}>{children}</View>;
}

const styles = StyleSheet.create({
  wrapper: {
      backgroundColor:"#ff9769",
    width: "100%",
    minHeight: 150,
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Card;
