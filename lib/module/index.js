import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Modal, ActivityIndicator } from "react-native";
import styles from "./styles";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
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
  const [_visible, setVisible] = useState(visible);

  // Merge provided colors with defaults
  const mergedColors = {
    ...DEFAULT_COLORS,
    ...colors
  };
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement(Modal, {
    transparent: true,
    animationType: "none",
    visible: _visible
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.modalOverlay
  }, /*#__PURE__*/React.createElement(Animated.View, {
    style: [styles.container, {
      backgroundColor: mergedColors.backgroundColor,
      borderColor: mergedColors.buttonTextColor + "10"
    }],
    entering: FadeInDown.duration(500).delay(100),
    exiting: FadeOutDown.duration(500).delay(100)
  }, /*#__PURE__*/React.createElement(View, {
    style: styles.contentContainer
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.title, {
      color: mergedColors.buttonTextColor
    }]
  }, title || "Operation Completed Successfully"), description && /*#__PURE__*/React.createElement(Text, {
    style: [styles.desc, {
      color: mergedColors.descriptionTextColor
    }]
  }, description)), showLoader && /*#__PURE__*/React.createElement(ActivityIndicator, {
    size: "small",
    color: mergedColors.buttonTextColor
  }), /*#__PURE__*/React.createElement(TouchableOpacity, {
    style: [styles.closeButton, {
      backgroundColor: mergedColors.buttonBgColor,
      borderColor: mergedColors.descriptionTextColor + "10"
    }],
    onPress: () => {
      setVisible(false);
      if (onButtonPress) onButtonPress();
    }
  }, /*#__PURE__*/React.createElement(Text, {
    style: [styles.closeButtonText, {
      color: mergedColors.buttonTextColor
    }]
  }, buttonText || "Close")))));
};
export default BottomAlert;
//# sourceMappingURL=index.js.map