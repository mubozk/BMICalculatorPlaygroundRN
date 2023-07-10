import React, { useReducer, useRef } from "react";
import styles from "./styles";
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";
import { calculateBMI } from "../utils/helperFunctions";
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


export default InputScreen;