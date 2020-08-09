import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Select({ placeholder, items, name, onSelect }) {
  const [openModal, setModalState] = useState(false);
  const [value, setValue] = useState("");

    useEffect(() => {
        onSelect(value, name)
    }, [value])

  const handlePress = () => {
    console.log("hey");
    setModalState((prevState) => !prevState);
  };

  const handleOptionSelect = (item) => {
    console.log('item', item)
    setValue(item.name);
    setModalState(false);
  };
  return (
    <>
      <TouchableOpacity onPress={handlePress}>
        <View style={styles.wrapper}>
          <TextInput
            value={value}
            placeholder={placeholder}
            style={styles.input}
            editable={false}
            inlineImageLeft="search_icon"
          />
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {items.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleOptionSelect(item)}
                  style={styles.touch}
                >
                  <View style={styles.option__wrapper}>
                    <Text style={styles.options}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  input: {
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: "#ccc",
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
    padding: 10,
    width: "50%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  option__wrapper: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
    marginVertical: 10,
    padding: 10,
  },
  options: {
    textAlign: "center",
  },
  touch: {
    width: "100%",
  },
});

export default Select;
