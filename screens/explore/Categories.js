import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import Category from "../../components/Category";

import { categories } from "../../constants/categories";

function Explore({ navigation }) {
  const [state, setState] = useState([]);
  

  useEffect(() => {
    setState(categories);
    console.log("categories--", categories);
  }, []);

  const handlePress = async (id) => {
    navigation.navigate("Questions", { params: id });
  };

  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        {state.length
          ? state.map((item) => {
              return <Category category={item} press={handlePress} />;
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

export default Explore;
