import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
const ResultScreen = ({ route }) => {
  const { bmi } = route.params;
  const navigation = useNavigation();
  const handleRecalculate = () => {
    navigation.navigate("InputScreen");
  };
  return (
    <View style={styles.resultscreen}>
      <View style={styles.resultSection}>
        <Text style={styles.yourBmiIs}>Your BMI is:</Text>
        <Text style={[styles.text7, styles.text7FlexBox]}>{bmi}</Text>
      </View>
      <View style={[styles.recalculateSection, styles.text7Position]}>
        <View style={[styles.leftredbox, styles.greenboxPosition]} />
        <View style={[styles.leftredbox1, styles.leftredboxPosition]} />
        <View style={[styles.leftredbox2, styles.leftredboxPosition]} />
        <View style={[styles.rightredbox, styles.greenboxPosition]} />
        <View style={[styles.greenbox, styles.greenboxPosition]} />
        <Text style={[styles.text8, styles.textTypo2]}>...17</Text>
        <Text style={[styles.text9, styles.textTypo2]}>30...</Text>
        <Text style={[styles.text10, styles.textTypo1]}>18.5...</Text>
        <Text style={[styles.text11, styles.textTypo1]}>...24.9</Text>
        <Text style={[styles.text12, styles.textTypo]}>...18.4</Text>
        <Text style={[styles.text13, styles.textTypo]}>25...</Text>
        <TouchableOpacity
          style={[styles.recalculateSectionChild, styles.recalculatePosition]}
          onPress={handleRecalculate}
        >
          <Text style={[styles.recalculate, styles.recalculatePosition]}>
            RECALCULATE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ResultScreen;
