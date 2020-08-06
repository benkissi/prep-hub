import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { useSelector } from "react-redux";

import Score from "../../components/Score";
import { COLORS } from "../../constants/colors";

function Scores() {
  const { scores } = useSelector((state) => state.questions);

  const renderScore = ({ item }) => (
    <Score
      score={item.score}
      total={item.total}
      subject={item.subject}
      date={item.date}
      duration={item.duration}
    />
  );
  return (
    <View style={styles.wrapper}>
      {scores.length ? (
        <FlatList
          style={{ width: "100%", flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          data={scores}
          renderItem={renderScore}
          keyExtractor={(item) => item.question}
        />
      ) : (
        <View style={styles.empty_container}>
          <Text style={styles.empty__text}>
            You dont have any scores yet. Take a test to populate scores
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    width: "100%",
    marginTop: StatusBar.currentHeight || 0,
  },
  empty_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  empty__text: {
    textAlign: "center",
    fontFamily: "Raleway_700Bold",
    color: COLORS.DEEP_GRAY,
    fontSize: 25,
    lineHeight: 35,
  },
});

export default Scores;
