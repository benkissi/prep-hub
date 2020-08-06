import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Answers from "./Answers";

import { formArray } from "../utils";


function Question({ question, num, total, forwardValidity }) {
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selected, setSelected] = useState("");

  useFocusEffect(
    useCallback(() => {
      setSelected('')
      setCorrectAnswer(question.correct_answer);
      if (question.type === "multiple") {
        const ansArray = formArray(
          question.incorrect_answers,
          question.correct_answer
        );
        setAnswers(ansArray);
      } else if(question.type === "boolean") {
        setAnswers(["True", "False"]);
      }
    }, [question])
  );

  useEffect(() => {
    if (selected && typeof selected === "string") {
      let isCorrect = selected === correctAnswer;
      forwardValidity(isCorrect)
    }
  }, [selected]);

  useEffect(() => {
    console.log('question changed')
    setSelected('')
  }, [question])

  const handleSelect = (ans) => {
    setSelected(ans);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.question}>
        <Text style={styles.progress}>
          {num} / {total}
        </Text>
        <Text style={styles.question__text}>{question.question}</Text>
      </View>
      <View style={styles.answers}>
        <Answers answers={answers} onSelect={handleSelect} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    padding: 0,
    backgroundColor: "white",
  },
  question: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "50%",
    backgroundColor: "#ff9769",
    padding: 16,
    height: "40%",
  },
  question__text: {
    fontFamily: "Raleway_700Bold",
    fontSize: 20,
    color: "white",
  },
  progress: {
      fontFamily: "Raleway_700Bold",
      color: "white",
      marginBottom: 30,
      fontSize: 20
  }
});

export default Question;
