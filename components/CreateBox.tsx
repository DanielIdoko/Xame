import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

const createItems = ["New Note", "New Todo", "New Reminder", "New Collection"];

const CreateBox = () => {
  return (
    <View
      style={{
        position: "fixed",
        right: 85,
        // width: wind,
        bottom: 150,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: colors.backgroundLight,
          padding: 10,
          // borderBottomWidth: 1,
          // borderBottomColor: colors.muted,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "arial",
          }}
        >
          New Note
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.backgroundLight,
          padding: 10,
          // borderBottomWidth: 1,
          // borderBottomColor: colors.muted,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "arial",
          }}
        >
          New Todo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: colors.backgroundLight,
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontFamily: "arial",
          }}
        >
          New Reminder
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateBox;
