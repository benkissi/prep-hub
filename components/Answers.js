import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function Component({ answers, onSelect }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if(value && typeof value === 'string'){
        onSelect(value)
    }
  }, [value])

  useEffect(() => {
    setValue("")
  }, [answers])
  return (
    <View style={styles.wrapper}>
      {answers.map((ans) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setValue(ans);
            }}
            style={styles.touch}
          >
            <View
              key={ans}
              style={[
                styles.container,
                value === ans ? styles.highlight : null,
              ]}
            >
              <View style={styles.radioCircle}>
                {value === ans && <View style={styles.selectedRb} />}
              </View>
              <Text style={styles.radioText}>{ans}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 16,
    margin: 0
  },
  touch: {
    width: "100%",
    height: "auto"
  },
  container: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#eee",
    borderWidth: 1,
    padding: 16,
    width: "100%",
    borderRadius: 4,
  },
  radioText: {
    marginRight: 35,
    fontSize: 16,
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
  },
  highlight: {
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  selectedRb: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: "#ff9769",
  },
  result: {
    marginTop: 20,
    color: "white",
    fontWeight: "600",
    backgroundColor: "#F3FBFE",
  },
});

export default Component;
