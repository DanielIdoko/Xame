import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import indexDesigns from "@/app/design";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const Index = () => {
  return (
    <SafeAreaView style={indexDesigns.main}>
      <Text style={indexDesigns.main_text}>Xame</Text>
      <Text style={indexDesigns.main_sub_text}>
        Made for{" "}
        <Text
          style={{
            color: "#1e1eae",
          }}
        >
          You
        </Text>
        .
      </Text>
      <CustomButton
        title="Get Started"
        buttonStyles={{
          backgroundColor: "#1e1eae",
          padding: 10,
          borderRadius: 10,
          width: window.innerWidth - 30,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bottom: 40,
        }}
        textSyles={{
          color: "#fff",
          fontSize: 15,
        }}
        handlePress={() => router.push('/home')}
      />
    </SafeAreaView>
  );
};

export default Index;
