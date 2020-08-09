import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import RadioToggle from "../../components/RadioToggle"

const logo = require('../../assets/logo.png')

function Auth() {
  const [formType, setFormType] = useState("signin");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValid, setValidity] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [techerCode, setTecherCode] = useState(false);

  const onInputChangeHandler = useCallback(
    (name, value, validity) => {
      if (name === "name") {
        setUserName(value);
        setValidity(validity);
      } else if (name === "password") {
        setPassword(value);
        setValidity(validity);
      } else if (name === "repeat_password") {
        setRepeatPassword(value);
        setValidity(validity);
      }else if (name === "teacher_code") {
        setTecherCode(value);
        setValidity(validity);
      }
    },
    [setUserName, setPassword]
  );

  const toggleForm = () => {
    setFormType((prevState) => (prevState === "signin" ? "signup" : "signin"));
  };

  const handleTeacherToggle = (status) => {
    setIsTeacher(status)
  }

  const handleAuthSubmit = () => {};

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <KeyboardAvoidingView style={styles.wrapper}>
    <View style={styles.wrapper}>
      <View style={styles.logo__container} >
        <Image style={styles.logo} source={logo} resizeMode="contain"/>
      </View>
      <Text style={styles.title}>
        {formType == "signin" ? "Sign In" : "Sign Up"}
      </Text>
      {
        formType == "signup"? <View style={styles.toggle}><RadioToggle text="I am a teacher" onToggle={handleTeacherToggle}/></View>: null
      }
      
      <View style={styles.form__wrapper}>
        <View style={styles.form__control}>
          <Input
            name="name"
            placeholder="Name"
            keyboardType="default"
            minLength={3}
            errorText="Name is required"
            onInputChange={onInputChangeHandler}
          />
        </View>
        <View style={styles.form__control}>
          <Input
            name="password"
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
            minLength={7}
            errorText="Password is required"
            onInputChange={onInputChangeHandler}
          />
        </View>
        {formType === "signup" ? (
          <View style={styles.form__control}>
            <Input
              name="repeat_password"
              placeholder="Repeat password"
              keyboardType="default"
              secureTextEntry={true}
              minLength={7}
              errorText="Password is required"
              onInputChange={onInputChangeHandler}
            />
          </View>
        ) : null}
         {formType === "signup" && isTeacher ? (
          <View style={styles.form__control}>
            <Input
              name="teacher_code"
              placeholder="Enter teacher code"
              keyboardType="default"
              secureTextEntry={true}
              minLength={7}
              errorText="Teacher code is required"
              onInputChange={onInputChangeHandler}
            />
          </View>
        ) : null}
        <View style={styles.form__Button}>
          <Button
            onPress={handleAuthSubmit}
            text={formType == "signin" ? "Sign In" : "Sign Up"}
          />
        </View>
      </View>
      <View style={styles.form_info}>
        <Text style={styles.form_info__text}>
          {formType == "signin"
            ? `Don't have an account?`
            : `Already have an account?`}{" "}
        </Text>
        <Text
          style={{ ...styles.form_info__text, ...styles.form__info__action }}
          onPress={toggleForm}
        >
          {formType === "signin" ? "Sign up" : "Sign in"}
        </Text>
      </View>
    </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
    width: "100%"
  },
  title: {
    fontFamily: "Raleway_700Bold",
    fontSize: 20,
    color: "#8d8d8d",
  },
  form__wrapper: {
    display: "flex",
    width: "80%",
  },
  form__control: {
    margin: 5,
  },
  form__Button: {
    marginTop: 20,
  },

  form_info: {
    flexDirection: "row",
    marginTop: 20,
  },
  form_info__text: {
    fontFamily: "Raleway_400Regular",
    color: "#8d8d8d",
  },

  form__info__action: {
    color: "#ff9769",
  },

  logo__container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20
  },

  logo: {
    width: "30%",
    height: 100
  },
  toggle:{
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  }
});

export default Auth;
