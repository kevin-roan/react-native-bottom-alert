"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const screenWidth = _reactNative.Dimensions.get("window").width;
const styles = _reactNative.StyleSheet.create({
  container: {
    backgroundColor: "#f8f3ff",
    borderRadius: 20,
    shadowColor: _reactNative.Platform.OS === "android" ? "rgba(0,0,0,0.3)" : "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 10,
    padding: 20,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: _reactNative.Platform.OS === "android" ? 0.5 : 0,
    borderColor: "#532f9110",
    marginBottom: 30,
    width: screenWidth - 40
  },
  closeButton: {
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#f8f3ff",
    borderWidth: 0.5,
    borderRadius: 20,
    alignItems: "center",
    textAlign: "center",
    borderColor: "#6f779510"
  },
  closeButtonText: {
    fontFamily: "System",
    fontSize: 14,
    color: "#532f91",
    textTransform: "uppercase",
    letterSpacing: 0.5
  },
  title: {
    fontSize: 16,
    fontFamily: "System",
    color: "#532f91"
  },
  desc: {
    fontSize: 10,
    fontFamily: "System",
    color: "#6f7795"
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  contentContainer: {
    flex: 1
  }
});
var _default = exports.default = styles;
//# sourceMappingURL=styles.js.map