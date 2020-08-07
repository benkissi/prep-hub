import React, { useState, useCallback } from "react";
import { StyleSheet, View, Text } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";

function Auth() {
  const [formType, setFormType] = useState("signin");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValid, setValidity] = useState(false);

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
      }
    },
    [setUserName, setPassword]
  );

  const toggleForm = () => {
    setFormType((prevState) => (prevState === "signin" ? "signup" : "signin"));
  };

  const handleAuthSubmit = () => {};

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        {formType == "signin" ? "Sign In" : "Sign Up"}
      </Text>
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
        ) : (
          <Text></Text>
        )}
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
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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
});

export default Auth;
