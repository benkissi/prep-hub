import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView
} from "react-native";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";

import {setQuestions} from "../../utils/api"

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

    if (field === "title") {
      setTestTitle(value);
    }
  };

  const handleButtonPress = async () => {
    if (!isValid || total < 10 || !level || !subject || !questionType | !duration || !testTitle) {
      setFormError("Check form inputs and try again");
      return;
    }
    setFormError("");
    try {
      
    } catch (error) {
      const response = await setQuestions({testTitle, total, level, subject, questionType, duration})
    } 
  };

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
              items={["Form One", "Form Two", "Form Three"]}
            />
            <Select
              name="subject"
              placeholder="Select Subject"
              items={[
                "Mathematics",
                "Geography",
                "History",
                "IT",
                "Agric Science",
              ]}
              onSelect={handleSelect}
            />
            <Select
              name="type"
              placeholder="Select question type"
              items={["Multiple choice", "True or False", "Any type"]}
              onSelect={handleSelect}
            />
            <Select
              name="duration"
              placeholder="Select duration"
              items={["15 mins", "30 mins", "45 mins", "1 hr"]}
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
    width: "100%"
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
