import React, { useContext, useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import {setQuestions} from '../../store/actions/questions'

import { getQuestions } from "../../utils/api";

function Questions() {
  const dispatch = useDispatch()

  useFocusEffect(() => {
    
  })

  const fetchQuestions = useCallback(async () => {
    try {
      dispatch(setLoading(true));
      const response = await getQuestions(10);
      const questions = response.results;
      console.log("questions", questions);
      if (questions.length) {
        dispatch(setQuestions(questions));
      }

      fetchQuestions();
    } catch (error) {
      console.log(error);
    }
  });


  return (
    <View style={styles.wrapper}>
      <Text>Questions 1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default Questions;
