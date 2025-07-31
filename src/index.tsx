import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";

interface Colors {
  buttonTextColor?: string;
  buttonBgColor?: string;
  backgroundColor?: string;
  descriptionTextColor?: string;
}

interface Props {
  visible: boolean;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonPress?: () => void;
  duration?: number;
  autoHide?: boolean;
  showLoader?: boolean;
  colors?: Colors; // accepts color customization
}

const DEFAULT_COLORS: Required<Colors> = {
  buttonTextColor: "#3483fa", // was PRIMARY
  buttonBgColor: "#f0f2f5", // was BACKGROUND
  backgroundColor: "#fff", // was WHITE
  descriptionTextColor: "#6e6e6e", // was TINT
};

const BottomAlert: React.FC<Props> = ({
  title,
  visible,
  buttonText,
  description,
  onButtonPress,
  duration = 3000,
  autoHide = true,
  showLoader = true,
  colors = {},
}) => {
  const [_visible, setVisible] = useState(visible);

  // Merge provided colors with defaults
  const mergedColors = { ...DEFAULT_COLORS, ...colors };

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

  return (
    <Modal transparent animationType="none" visible={_visible}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.container,
            {
              backgroundColor: mergedColors.backgroundColor,
              borderColor: mergedColors.buttonTextColor + "10",
            },
          ]}
          entering={FadeInDown.duration(500).delay(100)}
          exiting={FadeOutDown.duration(500).delay(100)}
        >
          <View style={styles.contentContainer}>
            <Text
              style={[styles.title, { color: mergedColors.buttonTextColor }]}
            >
              {title || "Operation Completed Successfully"}
            </Text>
            {description && (
              <Text
                style={[
                  styles.desc,
                  { color: mergedColors.descriptionTextColor },
                ]}
              >
                {description}
              </Text>
            )}
          </View>
          {showLoader && (
            <ActivityIndicator
              size="small"
              color={mergedColors.buttonTextColor}
            />
          )}
          <TouchableOpacity
            style={[
              styles.closeButton,
              {
                backgroundColor: mergedColors.buttonBgColor,
                borderColor: mergedColors.descriptionTextColor + "10",
              },
            ]}
            onPress={() => {
              setVisible(false);
              if (onButtonPress) onButtonPress();
            }}
          >
            <Text
              style={[
                styles.closeButtonText,
                { color: mergedColors.buttonTextColor },
              ]}
            >
              {buttonText || "Close"}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default BottomAlert;
