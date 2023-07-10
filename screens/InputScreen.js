import React, { useReducer, useRef } from "react";

import {
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const initialState = {
  height: "",
  weight: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_HEIGHT":
      return { ...state, height: action.payload };
    case "SET_WEIGHT":
      return { ...state, weight: action.payload };
    default:
      return state;
  }
};

export const InputScreen = ({ navigation }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const heightInputRef = useRef(null);
  const weightInputRef = useRef(null);

  const handleHeightChange = (text) => {
    dispatch({ type: "SET_HEIGHT", payload: text });
  };

  const handleWeightChange = (text) => {
    dispatch({ type: "SET_WEIGHT", payload: text });
  };

  const handleCalculateBMI = () => {
    const { height, weight } = state;
    const bmi = calculateBMI(height, weight);
    navigation.navigate("ResultScreen", { bmi });
  };

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;
    return bmi.toFixed(2);
  };

  return (
    <View style={styles.inputscreen}>
<Text style={styles.titletext}>BMI CALCULATOR</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your height (in cm)"
        placeholderTextColor="#f4eee0"
        onChangeText={handleHeightChange}
        keyboardType="numeric"
        returnKeyType="next"
        onSubmitEditing={() => weightInputRef.current.focus()}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your weight (in kg)"
        placeholderTextColor="#f4eee0"
        onChangeText={handleWeightChange}
        keyboardType="numeric"
        ref={weightInputRef}
      />
      <TouchableOpacity
        onPress={handleCalculateBMI}
        style={styles.calculatebox}
      >
        <Text style={styles.calculateText}>Calculate BMI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputscreen: {
    backgroundColor: "#393646",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    color: "#f4eee0",
    width: "75%",
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 15,
    backgroundColor: "#4f4557",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 0.15,

  },
  calculatebox: {
    borderRadius: 5,
    backgroundColor: "#c54a4a",
    flex: 0.1,
    width: "75%",
    height: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  calculateText: {
    color: "#f4eee0",
  },
  titletext: {
    fontSize: 36,
    fontWeight: "700",
    color: "#f4eee0",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 284,
    height: 137
    }
});
export default InputScreen;