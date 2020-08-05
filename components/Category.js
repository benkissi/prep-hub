import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Card from "./Card";

function Category({ category, press }) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.wrapper} onPress={() => press(category.id)}>
      <View style={styles.card}>
        <Card color={category.color}>
          <Text style={styles.title}>{category.name}</Text>
        </Card>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    padding: 7,
  },
  card: {
    width: "100%",
    margin: 0,
  },

  title: {
    fontFamily: "Raleway_700Bold",
    fontSize: 40,
    color: "white",
    opacity: 0.5,
  },
});

export default Category;
