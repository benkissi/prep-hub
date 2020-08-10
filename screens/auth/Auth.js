import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Input from "../../components/Input";
import Button from "../../components/Button";
import RadioToggle from "../../components/RadioToggle";

import { signUpUser, signInUser } from "../../store/actions/user";
import { COLORS } from "../../constants/colors";

const logo = require("../../assets/logo.png");

function Auth() {
  const [formType, setFormType] = useState("signin");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValid, setValidity] = useState(false);
  const [isTeacher, setIsTeacher] = useState(false);
  const [teacherCode, setTeacherCode] = useState("");
  const [studentCode, setStudentCode] = useState("");
  const [schoolCode, setSchoolCode] = useState("");
  const [formError, setFormError] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.user);

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
      } else if (name === "teacher_code") {
        setTeacherCode(value);
        setValidity(validity);
      } else if (name === "school_code") {
        setSchoolCode(value);
        setValidity(validity);
      } else if (name === "student_code") {
        setStudentCode(value);
        setValidity(validity);
      }
    },
    [setUserName, setPassword]
  );

  const toggleForm = () => {
    setFormType((prevState) => (prevState === "signin" ? "signup" : "signin"));
  };

  const handleTeacherToggle = (status) => {
    setIsTeacher(status);
  };

  const handleAuthSubmit = () => {
    console.log("auth");
    let userType = isTeacher ? "teacher" : "student";
    let noErrors = false;

    if (formType === "signup") {
      const passwordsEqual = repeatPassword === password;
      if (!passwordsEqual) {
        setFormError(`Passwords don't match`);
        return;
      }
      if (userType === "teacher") {
        noErrors = !!(
          password &&
          isValid &&
          teacherCode &&
          schoolCode &&
          repeatPassword &&
          username
        );
      }

      if (userType === "student") {
        noErrors = !!(
          password &&
          isValid &&
          schoolCode &&
          repeatPassword &&
          username &&
          studentCode
        );
      }

      if (noErrors) {
        setFormError("");
        console.log("pass", noErrors);
        dispatch(
          signUpUser(
            username,
            password,
            teacherCode,
            studentCode,
            schoolCode,
            userType
          )
        );
      }
    }

    if (formType === "signin") {
      if (userType === "teacher") {
        noErrors = password && teacherCode && isValid;
        if (noErrors) {
          setFormError('');
          dispatch(signInUser(teacherCode, password, userType));
        }else {
          setFormError('Check inputs and try again');
        }
      }

      if (userType === "student") {
        noErrors = password && studentCode && isValid;
        if (noErrors) {
          setFormError('');
          dispatch(signInUser(studentCode, password, userType));
        }else {
          setFormError('Check inputs and try again');
        }
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={styles.wrapper}>
        <View style={styles.wrapper}>
          <View style={styles.logo__container}>
            <Image style={styles.logo} source={logo} resizeMode="contain" />
          </View>
          <Text style={styles.title}>
            {formType == "signin" ? "Sign In" : "Sign Up"}
          </Text>

          <View style={styles.toggle}>
            <RadioToggle text="I am a teacher" onToggle={handleTeacherToggle} />
          </View>

          {formError ? <Text style={styles.error}>{formError}</Text> : null}

          <View style={styles.form__wrapper}>
            <View style={styles.form__control}>
              {isTeacher ? (
                <View style={styles.form__control}>
                  <Input
                    name="teacher_code"
                    placeholder="Enter teacher code"
                    keyboardType="default"
                    minLength={7}
                    errorText="Teacher code is required"
                    onInputChange={onInputChangeHandler}
                  />
                </View>
              ) : null}
              {!isTeacher ? (
                <View style={styles.form__control}>
                  <Input
                    name="student_code"
                    placeholder="Enter student code"
                    keyboardType="default"
                    minLength={7}
                    errorText="Student code is required"
                    onInputChange={onInputChangeHandler}
                  />
                </View>
              ) : null}
              {formType === "signup" ? (
                <Input
                  name="name"
                  placeholder="Name"
                  keyboardType="default"
                  minLength={3}
                  errorText="Name is required"
                  onInputChange={onInputChangeHandler}
                />
              ) : null}
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

            {formType === "signup" ? (
              <View style={styles.form__control}>
                <Input
                  name="school_code"
                  placeholder="Enter school code"
                  keyboardType="default"
                  minLength={7}
                  errorText="School code is required"
                  onInputChange={onInputChangeHandler}
                />
              </View>
            ) : null}
            <View style={styles.form__Button}>
              {loading ? (
                <ActivityIndicator size="large" color={COLORS.MAIN} />
              ) : (
                <Button
                  press={handleAuthSubmit}
                  text={formType == "signin" ? "Sign In" : "Sign Up"}
                />
              )}
            </View>
          </View>
          <View style={styles.form_info}>
            <Text style={styles.form_info__text}>
              {formType == "signin"
                ? `Don't have an account?`
                : `Already have an account?`}{" "}
            </Text>
            <Text
              style={{
                ...styles.form_info__text,
                ...styles.form__info__action,
              }}
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
    width: "100%",
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
    marginBottom: 20,
  },

  logo: {
    width: "30%",
    height: 100,
  },
  toggle: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  error: {
    marginTop: 10,
    color: "tomato",
  },
});

export default Auth;
