import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Subject from "../../components/Subject";

import { subjects } from "../../constants/subjects";

function Subjects({ navigation }) {
  const [state, setState] = useState([]);
  

  useEffect(() => {
    setState(subjects);
    console.log("categories--", subjects);
  }, []);

  const handlePress = async (name) => {
    navigation.navigate("Questions", { subject: name });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        {state.length
          ? state.map((item) => {
              return <Subject category={item} press={handlePress} />;
            })
          : null}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  container: {
    alignItems: "center",
  },
});

export default Subjects;
