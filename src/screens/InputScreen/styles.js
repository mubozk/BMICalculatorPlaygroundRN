import { StyleSheet } from "react-native";
export default StyleSheet.create({
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
    height: 137,
  },
});
