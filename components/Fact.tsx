import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/constants/colors";

type factProps = {
  id: number;
  subject: string;
  fact: string;
};

const Fact = ({ fact }: factProps) => {
  return (
    <View
      style={{
        backgroundColor: colors.backgroundLight,
        borderWidth: 1,
        borderColor: colors.muted,
        padding: 10,
        marginTop: 2,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Text>💡</Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
          }}
        >
          {fact.subject.toUpperCase()}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 15,
          color: colors.textDark,
          paddingTop: 5,
        }}
      >
        {fact.fact}
      </Text>
    </View>
  );
};

export default Fact;
