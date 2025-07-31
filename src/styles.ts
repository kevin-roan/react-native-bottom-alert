import { StyleSheet, Platform, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f3ff",
    borderRadius: 20,
    shadowColor: Platform.OS === "android" ? "rgba(0,0,0,0.3)" : "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    padding: 20,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: Platform.OS === "android" ? 0.5 : 0,
    borderColor: "#532f9110",
    marginBottom: 30,
    width: screenWidth - 40,
  },
  closeButton: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#f8f3ff",
    borderWidth: 0.5,
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    borderColor: "#6f779510",
  },
  closeButtonText: {
    fontFamily: "System",
    fontSize: 14,
    color: "#532f91",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 16,
    fontFamily: "System",
    color: "#532f91",
  },
  desc: {
    fontSize: 10,
    fontFamily: "System",
    color: "#6f7795",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
  },
});

export default styles;
