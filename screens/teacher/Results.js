import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Card from '../../components/Card'
import Score from '../../components/Score'

function Results() {
  const renderScores = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.card__wrapper}>
          {/* <Score /> */}
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        data={["test 1", "test 2"]}
        renderItem={renderScores}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      },
      card__wrapper: {
        paddingVertical: 10,
      },
});

export default Results;
