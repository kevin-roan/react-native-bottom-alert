"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styles = _interopRequireDefault(require("./styles"));
var _reactNativeReanimated = _interopRequireWildcard(require("react-native-reanimated"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const DEFAULT_COLORS = {
  buttonTextColor: "#3483fa",
  // was PRIMARY
  buttonBgColor: "#f0f2f5",
  // was BACKGROUND
  backgroundColor: "#fff",
  // was WHITE
  descriptionTextColor: "#6e6e6e" // was TINT
};
const BottomAlert = ({
  title,
  visible,
  buttonText,
  description,
  onButtonPress,
  duration = 3000,
  autoHide = true,
  showLoader = true,
  colors = {}
}) => {
  const [_visible, setVisible] = (0, _react.useState)(visible);

  // Merge provided colors with defaults
  const mergedColors = {
    ...DEFAULT_COLORS,
    ...colors
  };
  (0, _react.useEffect)(() => {
    if (visible) {
      setVisible(true);
      if (autoHide) {
        const timer = setTimeout(() => {
          setVisible(false);
          if (onButtonPress) onButtonPress();
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      setVisible(false);
    }
  }, [visible, duration, onButtonPress]);
  if (!_visible) return null;
  return /*#__PURE__*/_react.default.createElement(_reactNative.Modal, {
    transparent: true,
    animationType: "none",
    visible: _visible
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.modalOverlay
  }, /*#__PURE__*/_react.default.createElement(_reactNativeReanimated.default.View, {
    style: [_styles.default.container, {
      backgroundColor: mergedColors.backgroundColor,
      borderColor: mergedColors.buttonTextColor + "10"
    }],
    entering: _reactNativeReanimated.FadeInDown.duration(500).delay(100),
    exiting: _reactNativeReanimated.FadeOutDown.duration(500).delay(100)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: _styles.default.contentContainer
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.title, {
      color: mergedColors.buttonTextColor
    }]
  }, title || "Operation Completed Successfully"), description && /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.desc, {
      color: mergedColors.descriptionTextColor
    }]
  }, description)), showLoader && /*#__PURE__*/_react.default.createElement(_reactNative.ActivityIndicator, {
    size: "small",
    color: mergedColors.buttonTextColor
  }), /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
    style: [_styles.default.closeButton, {
      backgroundColor: mergedColors.buttonBgColor,
      borderColor: mergedColors.descriptionTextColor + "10"
    }],
    onPress: () => {
      setVisible(false);
      if (onButtonPress) onButtonPress();
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
    style: [_styles.default.closeButtonText, {
      color: mergedColors.buttonTextColor
    }]
  }, buttonText || "Close")))));
};
var _default = exports.default = BottomAlert;
//# sourceMappingURL=index.js.map