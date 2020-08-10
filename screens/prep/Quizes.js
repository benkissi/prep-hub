import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import Card from "../../components/Card";

import { COLORS } from "../../constants/colors";

import { fetchQuizes } from "../../store/actions/questions";
import Test from "../../components/Test";

function Quizes({ route, navigation }) {
  const [quizesFetched, setFetchedQuizesState] = useState(false);
  const { subject, subjectId } = route.params;

  const dispatch = useDispatch();
  const { loading, quizes } = useSelector((store) => store.questions);

  useFocusEffect(
    useCallback(() => {
      const getQuizes = async () => {
        try {
          dispatch(fetchQuizes(subjectId));
        } catch (error) {
          console.log(error);
        }
      };
      getQuizes();

      return () => {
        setFetchedQuizesState(false);
      };
    }, [subject])
  );

  const onQuizPress = (quiz) => {
    navigation.navigate("Questions", {
      subject: subject,
      subjectId: subjectId,
      amount: quiz.amount,
      difficulty: quiz.difficulty,
      type: quiz.type,
      duration: quiz.duration,
      testId: quiz._id
    });
  };

  const renderQuizes = ({ item }) => (
    <TouchableOpacity style={styles.wrapper} onPress={() => onQuizPress(item)}>
      <Card>
        <Test test={item} />
      </Card>
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      {quizes && quizes.length > 0 ? (
        <FlatList
          style={styles.flatList}
          data={quizes}
          renderItem={renderQuizes}
          keyExtractor={(item) => item._id}
        />
      ) : loading ? (
        <ActivityIndicator size="large" color={COLORS.MAIN} />
      ) : (
        <Text>No quiz</Text>
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
    padding: 10,
    width: "100%",
  },
  flatList: {
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    flex: 1,
  },
  card__wrapper: {
    paddingVertical: 10,
  },
});

export default Quizes;
