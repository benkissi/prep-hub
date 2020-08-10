import React, { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import Score from "../../components/Score";

import { fecthUserScores } from "../../store/actions/questions";
import { COLORS } from "../../constants/colors";

function Scores() {
  const { scores, loading } = useSelector((state) => state.questions);
  const { studentCode } = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fecthUserScores(studentCode));
    }, [])
  );

  const renderScore = ({ item }) => (
    <Score
      score={item.score}
      total={item.total}
      subject={item.subject}
      date={item.createdAt}
      duration={item.duration}
    />
  );
  return (
    <View style={styles.wrapper}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.MAIN} />
      ) : scores.length ? (
        <FlatList
          style={{ width: "100%", flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          data={scores}
          renderItem={renderScore}
          keyExtractor={(item) => item.duration + "" + item.date}
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
