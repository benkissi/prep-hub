import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { COLORS } from "../constants/colors";

import { secondsToHms, getDateMonthYear, formatDate } from "../utils";

function Test({ test }) {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [duration, setDuration] = useState("");
  const [createdDate, setCreatedDate] = useState("");

  useEffect(() => {
    switch (test.category) {
      case "23":
        setSubject("History");
        break;
      case "22":
        setSubject("Geography");
        break;
      case "19":
        setSubject("Mathematics");
        break;
      case "18":
        setSubject("IT");
        break;
      case "17":
        setSubject("Agric Science");
    }

    switch (test.difficulty) {
      case "easy":
        setLevel("Form 1");
        break;
      case "medium":
        setLevel("Form 2");
        break;
      case "hard":
        setLevel("Form 3");
    }

    const convertedDuraation = secondsToHms(test.duration);
    setDuration(convertedDuraation);

    const createdDate = new Date(test.createdAt);
    const dateString = formatDate(createdDate);

    setCreatedDate(dateString);
  }, [test]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>{test.title}</Text>
        <Text style={styles.takers}>50</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.info__text}>Subject: {subject}</Text>
        <Text style={styles.info__text}>Class: {level}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.info__text}>Duration: {duration}</Text>
        <Text style={styles.info__text}>{createdDate}</Text>
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
    justifyContent: "space-between",
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
    color: COLORS.DEEP_GRAY,
  },
  takers: {
    fontFamily: "Raleway_700Bold",
    color: COLORS.MAIN,
    fontSize: 20,
  },
});

export default Test;
