import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { COLORS } from "../constants/colors";

function Test() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Quadratic Eqns Test - Mid term</Text>
        <Text style={styles.takers}>50</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.info__text}>Subject: Geography</Text>
        <Text style={styles.info__text}>Class: Form 3</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.info__text}>Duration: 15 mins</Text>
        <Text style={styles.info__text}>12 August 2020</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    fontFamily: "Raleway_700Bold",
    color: COLORS.MEDIUM_BLACK,
    fontSize: 20,
  },
  info: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    flex: 1,
    paddingBottom: 5,
  },
  info__text: {
      color: COLORS.DEEP_GRAY
  },
  takers: {
    fontFamily: "Raleway_700Bold",
    color: COLORS.MAIN,
    fontSize: 20
  }
});

export default Test;
