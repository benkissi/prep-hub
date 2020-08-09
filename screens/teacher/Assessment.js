import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Result from "../../components/Result";
import Test from "../../components/Test";
import Card from "../../components/Card";
import { ceil } from "react-native-reanimated";

function Results({navigation}) {
  const handleCardPress = () => {
    navigation.navigate('Results')
  }
  const renderTest = ({ item }) => (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card__wrapper}>
        <Card>
          <Test />
        </Card>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <FlatList
        style={{ width: "100%", flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        data={["test 1", "test 2"]}
        renderItem={renderTest}
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
