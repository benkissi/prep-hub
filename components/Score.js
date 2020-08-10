import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { COLORS } from "../constants/colors";
import { formatDate, secondsToHms } from "../utils";

function Score({ score, total, subject, date, duration, name, studentId }) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const percent = (score / total) * 100;
    if (percent > 39 && percent < 51) {
      setImage(require("../assets/bronze.png"));
    } else if (percent > 50 && percent < 71) {
      setImage(require("../assets/silver.png"));
    } else if (percent > 70 && percent < 99) {
      setImage(require("../assets/gold.png"));
    } else if (percent === 100) {
      setImage(require("../assets/trophy.png"));
    }
  }, []);

  const timeUsedString = secondsToHms(duration);
  const dateObject = new Date(date);
  const dateString = formatDate(dateObject);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>Student Id: {studentId}</Text>
      <View style={styles.top}>
        <View style={styles.score__container}>
          <Text style={styles.score}>{score}</Text>
          <Text style={styles.sub}> / {total}</Text>
        </View>
        <View style={styles.subject__container}>
          <Text style={styles.subject}>{subject}</Text>
        </View>
        <View style={styles.medal}>
          <Image
            source={image}
            style={styles.image}
            resizeMode="contain"
          ></Image>
        </View>
      </View>
      <View style={styles.info__container}>
        <Text styles={styles.info}>{dateString}</Text>
        <Text styles={styles.info}>{timeUsedString}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginVertical: 10,
    padding: 16,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  score__container: {
    flexDirection: "row",
    alignItems: "center",
    width: "20%",
  },
  score: {
    fontFamily: "Raleway_700Bold",
    color: COLORS.MAIN,
    fontSize: 50,
    alignSelf: "flex-end",
    margin: 0
  },
  sub: {
    fontFamily: "Raleway_400Regular",
  },
  subject__container: {
    width: "40%",
    alignItems: "center",
  },
  subject: {
    fontFamily: "Raleway_700Bold",
    color: COLORS.DEEP_GRAY,
    fontSize: 20,
    width: "100%",
  },
  medal: {
    alignItems: "center",
    justifyContent: "center",
    width: "15%",
  },
  image: {
    width: "100%",
    height: "70%",
    alignSelf: "center",
  },
  info__container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  info: {
    fontFamily: "Raleway_400Regular",
    color: COLORS.LIGTH_GRAY,
  },
  name: {
    color: COLORS.MEDIUM_BLACK,
    fontSize: 17,
    width: "100%",
    paddingTop: 10,
    margin: 0,
    fontStyle: "italic"
  },
});

export default Score;
