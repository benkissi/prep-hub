import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Question from "../../components/Question";
import Button from "../../components/Button";
import Timer from "../../components/Timer"
import {COLORS} from '../../constants/colors'

import { secondsToHms } from "../../utils";

import {
  setQuestions,
  setLoading,
  setSubjectScore,
  bookmarkQuestion
} from "../../store/actions/questions";
import { getQuestions } from "../../utils/api";

function Questions({ route, navigation }) {
  const [total, setTotal] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [validStatus, setValidStatus] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false)
  const [avaliableTime, setAvailableTime] = useState(0)
  
  const totalTime = 900

  const dispatch = useDispatch();
  const { questions, loading } = useSelector((store) => store.questions);
  const { subject } = route.params;

  useFocusEffect(
    useCallback(() => {
      if (questions.length) {
        const total = questions.length;
        setTotal(total);
      }
    }, [questions])
  );

  useEffect(() => {
    if(completed) {
      const duration = secondsToHms(totalTime - avaliableTime)
      dispatch(setSubjectScore(subject, score, total, duration));
      navigation.navigate("Score", {
        subject: subject,
        score: score,
        total: total,
      });
    }
  }, [completed])

  useEffect(() => {
    if(typeof avaliableTime === 'number' && avaliableTime <= 0){
      setCompleted(true)
    }
  }, [avaliableTime])

  useFocusEffect(
    useCallback(() => {
      const fetchQuestions = async () => {
        try {
          dispatch(setLoading(true));
          setCurrentNumber(1);
          setScore(0);
          setCompleted(false)

          const response = await getQuestions(10);
          const questions = response.results;
          if (questions.length) {
            dispatch(setQuestions(questions));
          }
          dispatch(setLoading(false));
        } catch (error) {
          console.log(error);
        }
      };
      fetchQuestions();

      return () => {
        setCurrentNumber(1);
      };
    }, [subject])
  );

  const handleValidity = (status) => {
    setValidStatus(status);
  };

  const handleNext = () => {
    if (validStatus) {
      setScore((prevState) => prevState + 1);
    }
    if (!(currentNumber === total)) {
      setCurrentNumber((prevState) => prevState + 1);
    } else {
      //done
      setCompleted(true)
      
    }
  };

  const handleBookmark = () => {
    const current = questions[currentNumber - 1]
    dispatch(bookmarkQuestion(current))
  }

  const timerListener = (remainingSeconds) => {
    setAvailableTime(remainingSeconds)
  }

  return (
    <>
      {!loading ? (
        <View style={styles.wrapper}>
          <View style={styles.timer}><Timer total={totalTime} listener={timerListener}/></View>
          {questions.length ? (
            <Question
              question={questions[currentNumber - 1]}
              total={total}
              num={currentNumber}
              forwardValidity={handleValidity}
            />
          ) : null}
          <View style={styles.controls}>
            <Button
              text={currentNumber == total ? "Done" : "Next"}
              press={handleNext}
            />
            <Text style={styles.skip} onPress={handleBookmark}>Bookmark</Text>
          </View>
        </View>
      ) : (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={COLORS.MAIN} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  controls: {
    width: "100%",
    height: "20%",
    backgroundColor: "white",
    paddingHorizontal: 16,
    alignItems: "center",
  },
  skip: {
    margin: 20,
    fontFamily: "Raleway_400Regular",
  },
  timer: {
    justifyContent: "center",
    paddingHorizontal: 16,
    alignItems: "flex-end",
    paddingTop: StatusBar.currentHeight + 20 || 0,
    backgroundColor: COLORS.MAIN,
    width: "100%"
  }
});

export default Questions;
