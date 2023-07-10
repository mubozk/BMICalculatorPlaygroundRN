import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

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
const styles = StyleSheet.create({
  text7FlexBox: {
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
  },
  text7Position: {
    left: "50%",
    position: "absolute",
  },
  greenboxPosition: {
    height: 30,
    bottom: 70,
    left: "50%",
    position: "absolute",
  },
  leftredboxPosition: {
    backgroundColor: "#cdba0c",
    height: 30,
    width: 70,
    bottom: 70,
    left: "50%",
    position: "absolute",
  },
  textTypo2: {
    color: "#ff0000",
    fontSize: 20,
    bottom: 100,
    height: 30,
    width: 70,
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  textTypo1: {
    color: "#00ff57",
    fontSize: 20,
    bottom: 100,
    height: 30,
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  textTypo: {
    color: "#cdba0c",
    fontSize: 20,
    bottom: 100,
    height: 30,
    width: 70,
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  recalculatePosition: {
    bottom: 0,
    marginLeft: -215,
    left: "50%",
    position: "absolute",
  },
  yourBmiIs: {
    marginLeft: -183,
    top: 0,
    fontSize: 30,
    color: "#f4eee0",
    height: 101,
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
    textAlign: "left",
    width: 366,
    left: "50%",
    position: "absolute",
  },
  text7: {
    marginLeft: -84,
    top: 101,
    fontSize: 55,
    width: 168,
    height: 174,
    opacity: 0.99,
    left: "50%",
    position: "absolute",
  },
  resultSection: {
    marginLeft: -186,
    top: 191,
    height: 275,
    width: 366,
    left: "50%",
    position: "absolute",
  },
  leftredbox: {
    width: 70,
    backgroundColor: "#ff0000",
    height: 30,
    bottom: 70,
    marginLeft: -215,
  },
  leftredbox1: {
    marginLeft: 73,
  },
  leftredbox2: {
    marginLeft: -145,
  },
  rightredbox: {
    marginLeft: 143,
    width: 70,
    backgroundColor: "#ff0000",
    height: 30,
    bottom: 70,
  },
  greenbox: {
    backgroundColor: "#00ff57",
    width: 150,
    marginLeft: -75,
    height: 30,
    bottom: 70,
  },
  text8: {
    marginLeft: -215,
    textAlign: "left",
  },
  text9: {
    textAlign: "right",
    marginLeft: 143,
  },
  text10: {
    width: 75,
    marginLeft: -75,
    textAlign: "left",
  },
  text11: {
    marginLeft: -3,
    textAlign: "right",
    width: 70,
  },
  text12: {
    marginLeft: -145,
    textAlign: "left",
  },
  text13: {
    textAlign: "right",
    marginLeft: 73,
  },
  recalculateSectionChild: {
    borderRadius: 5,
    backgroundColor: "#c54a4a",
    height: 70,
    width: 430,
  },
  recalculate: {
    fontSize: 40,
    width: 428,
    height: 69,
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    alignItems: "center",
    display: "flex",
    fontWeight: "700",
  },
  recalculateSection: {
    bottom: 62,
    height: 130,
    width: 430,
    marginLeft: -215,
  },
  resultscreen: {
    backgroundColor: "#4f4557",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});
export default ResultScreen;
