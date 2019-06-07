import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFFF",
    height: 320,
    margin: 3
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
    alignSelf: "center",
    position: "absolute",
    marginTop: 130
  },
  top: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  body: {
    marginTop: 2
  },
  bodyContent: {
    alignItems: "center",
    padding: 30
  },
  name: {
    fontSize: 20,
    color: "#0091ea",
    fontWeight: "600"
  },
  info: {
    fontSize: 16,
    color: "#696969",
    margin: 15,
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 8,
    backgroundColor: "#0091ea"
  },
  bar: {
    position: "absolute",
    right: 0
  }
});

export default styles;
