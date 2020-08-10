import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Result from "../../components/Result";
import Test from "../../components/Test";
import Card from "../../components/Card";

import {COLORS} from '../../constants/colors'

import { fetchTeacherQuizes } from "../../store/actions/questions";

function Results({ navigation }) {
  const { teacherCode } = useSelector((store) => store.user.user);
  const { loading, teacherQuizes } = useSelector((store) => store.questions);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchTeacherQuizes(teacherCode));
    }, [])
  );
  const handleCardPress = (id) => {
    navigation.navigate("Results", {testId: id});
  };
  const renderTest = ({ item }) => (
    <TouchableOpacity onPress={() => handleCardPress(item._id)}>
      <View style={styles.card__wrapper}>
        <Card>
          <Test test={item}/>
        </Card>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.MAIN} />
      ) : teacherQuizes.length?
        <FlatList
          style={{ width: "100%", flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 5 }}
          data={teacherQuizes}
          renderItem={renderTest}
          keyExtractor={(item) => item._id}
        />: <Text style={styles.empty__text}>You don't have any quizes yet. Kindly create one</Text>
      }
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
  empty__text: {
    textAlign: "center",
    fontFamily: "Raleway_700Bold",
    color: COLORS.DEEP_GRAY,
    fontSize: 25,
    lineHeight: 35,
  },
});

export default Results;
