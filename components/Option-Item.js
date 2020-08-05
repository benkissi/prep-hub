import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function OptionItem({ list }) {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.wrapper}>
      {list ? (
        list.map((item) => {
          <>
            <TouchableOpacity
              style={styles.radioCircle}
              onPress={() => {
                this.setState({
                  value: item.key,
                });
              }}
            >
              {value === item.key && <View style={styles.selectedRb} />}
            </TouchableOpacity>
            <Text>{item.text}</Text>
          </>;
        })
      ) : (
        <Text>No list</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
  },
});

export default OptionItem;
