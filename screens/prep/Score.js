import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import {useDispatch, useSelector} from 'react-redux'

import Button from "../../components/Button";

import {setUserScore} from '../../store/actions/questions'

function Score({ route, navigation }) {
  const [review, setReview] = useState("");
  const [imageLink, setImageLink] = useState(require("../../assets/below.png"));
  const { subject, score, total, testId, duration } = route.params;

  const dispatch = useDispatch()
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    const percentage = (score / total) * 100;
    if (percentage > 50 && percentage < 71) {
      setReview("Nice! Above average, there is always room for improvement");
      setImageLink(require("../../assets/above.png"));
    } else if (percentage > 70 && percentage < 91) {
      setReview("Well done, there is always room for improvement");
      setImageLink(require("../../assets/above.png"));
    } else if (percentage > 90) {
      setReview("Perfect score!, well done");
      setImageLink(require("../../assets/above.png"));
    } else if (percentage < 50) {
      setReview(
        "Below average, don't worry you can try again. Remember, its just about practising"
      );
      setImageLink(require("../../assets/below.png"));
    } else if (percentage == 50) {
      setReview(
        "Averge, don't worry you can try again. Remember, its just about practising"
      );
      setImageLink(require("../../assets/below.png"));
    }
    dispatch(setUserScore(user.studentCode,testId, subject, score, total, duration))
  }, []);

  const handleButtonPress = () => {
    navigation.navigate("Subjects");
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.title}>Your score</Text>
        <Text style={styles.subject_name}>Subject: {subject}</Text>
      </View>
      <View style={styles.image__container}>
        <ImageBackground
          source={imageLink}
          style={styles.image}
          resizeMode="contain"
        ></ImageBackground>
      </View>
      <View style={styles.score__container}>
        <Text style={styles.score}>{score}</Text>
        <Text style={styles.total}>/ {total}</Text>
      </View>
      <Text style={styles.desc}>{review}</Text>
      <View style={styles.button__wrapper}>
        <Button text="Go to Subjects" press={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    fontFamily: "Raleway_700Bold",
    fontSize: 20,
    color: "#8d8d8d",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  subject_name: {
    margin: 10,
    fontFamily: "Raleway_400Regular",
  },
  image__container: {
    width: "100%",
    height: "10%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  score: {
    fontSize: 90,
    fontFamily: "Raleway_700Bold",
    color: "#ff9769",
    marginBottom: -17,
  },
  desc: {
    fontFamily: "Raleway_400Regular",
    textAlign: "center",
    width: "80%",
    lineHeight: 25,
  },
  total: {
    fontSize: 16,
    fontFamily: "Raleway_700Bold",
  },
  score__container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 20,
  },
  button__wrapper: {
    marginTop: 50,
  },
});

export default Score;
