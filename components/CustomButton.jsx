import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  buttonStyles,
  textSyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      style={buttonStyles}
      disabled={isLoading}
    >
      <Text style={textSyles}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
