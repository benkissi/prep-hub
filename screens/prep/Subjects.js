import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Subject from "../../components/Subject";

import { subjects } from "../../constants/subjects";

function Subjects({ navigation }) {
  const [state, setState] = useState([]);
  

  useEffect(() => {
    setState(subjects);
    console.log("categories--", subjects);
  }, [subjects]);

  const handlePress = async (name, id) => {
    navigation.navigate("Quizes", { subject: name, subjectId: id });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        {state.length
          ? state.map((item) => {
              return <Subject key={item.id} category={item} press={handlePress} />;
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
