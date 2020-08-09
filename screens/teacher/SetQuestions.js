import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import { subjects } from "../../constants/subjects";

import { setQuestions } from "../../utils/api";

function SetQuestions() {
  const [total, setTotal] = useState(0);
  const [isValid, setValidity] = useState(false);
  const [level, setLevel] = useState("");
  const [subject, setSubject] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [formError, setFormError] = useState("");
  const [duration, setDuration] = useState("");
  const [testTitle, setTestTitle] = useState("");

  const onInputChangeHandler = useCallback(
    (name, value, validity) => {
      if (name === "total") {
        setTotal(value);
        setValidity(validity);
      }
      if(name === "title"){
        setTestTitle(value)
        setValidity(validity);
      }
    },
    [setTotal, setValidity]
  );

  const handleSelect = (value, field) => {
    if (field === "level") {
      setLevel(value);
    }

    if (field === "subject") {
      setSubject(value);
    }

    if (field === "type") {
      setQuestionType(value);
    }

    if (field === "duration") {
      setDuration(value);
    }
  };

  const handleButtonPress = async () => {
    if (
      !isValid ||
      total < 10 ||
      !level ||
      !subject ||
      !questionType | !duration ||
      !testTitle
    ) {
      setFormError("Check form inputs and try again");
      return;
    }
    setFormError("");
    let data = {} 

    data.type = typeArray.find((item) =>item.name === questionType).value
    data.difficulty = levelArray.find((item) =>item.name === level).value
    data.category = subjects.find((item) =>item.name === subject).id
    data.amount = total
    data.duration = durationArray.find((item) =>item.name === duration).value
    data.title = testTitle
    const response = await setQuestions(data);
    try {
    } catch (error) {
      
    }
  };

  const typeArray = [
    { id: 1, name: "Multiple Choice", value: "multiple" },
    { id: 2, name: "True or False", value: "boolean" },
    { id: 3, name: "Any type", value: "any" },
  ];

  const levelArray = [
    { id: 1, name: "Form One", value: "easy" },
    { id: 2, name: "Form Two", value: "medium" },
    { id: 3, name: "Form Three", value: "hard" },
  ];

  const durationArray = [
    { id: 1, name: "15 mins", value: 900 },
    { id: 2, name: "30 mins", value: 1800 },
    { id: 3, name: "45 mins", value: 2700 },
    { id: 4, name: "1 hr", value: 3600 },
  ];

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView style={styles.wrapper}>
        <KeyboardAvoidingView style={styles.wrapper}>
          <View style={styles.content}>
            <View style={styles.form}>
              <Text style={styles.formError}>{formError ? formError : ""}</Text>
              <Input
                keyboardType="default"
                name="title"
                placeholder="Test title"
                required={true}
                errorText="Test title is required"
                onInputChange={onInputChangeHandler}
              />
              <Input
                min={10}
                keyboardType="numeric"
                name="total"
                placeholder="Number of questions"
                required={true}
                errorText="Number of questions is required"
                onInputChange={onInputChangeHandler}
              />
              <Select
                name="level"
                onSelect={handleSelect}
                placeholder="Select level"
                items={levelArray}
              />
              <Select
                name="subject"
                placeholder="Select Subject"
                items={subjects}
                onSelect={handleSelect}
              />
              <Select
                name="type"
                placeholder="Select question type"
                items={typeArray}
                onSelect={handleSelect}
              />
              <Select
                name="duration"
                placeholder="Select duration"
                items={durationArray}
                onSelect={handleSelect}
              />

              <View style={styles.button__wrapper}>
                <Button text="Done" press={handleButtonPress} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "white"
  },
  content: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "80%",
  },
  button__wrapper: {
    marginTop: 50,
  },
  formError: {
    textAlign: "center",
    color: "tomato",
  },
});

export default SetQuestions;
