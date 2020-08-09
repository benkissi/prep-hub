import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function RadioToggle({ text, onToggle }) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    if(typeof value === 'boolean'){
        onToggle(value)
    }
  }, [value])

  useEffect(() => {
    setValue(false)
  }, [text])

  const handlePress = () => {
      setValue((prevState) => !prevState)
  }
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
            onPress={handlePress}
            style={styles.touch}
          >
            <View
              style={styles.container}
            >
              <View style={styles.radioCircle}>
              {value? <View style={styles.selectedRb} /> : null}
              </View>
              <Text style={styles.radioText}>{text}</Text>
            </View>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    margin: 0,
    alignItems: "center",
    justifyContent: "center"
  },
  touch: {
    width: "100%",
    height: "auto"
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#eee",
    padding: 0,
    width: "100%",
    borderRadius: 4,
  },
  radioText: {
    fontSize: 12,
    fontFamily: "Raleway_400Regular",
    color: "#000",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#ff9769",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#ff9769",
  },
 
});

export default RadioToggle;
