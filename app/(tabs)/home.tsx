import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "@/constants/colors";
import { facts } from "@/data/facts";
import Fact from "@/components/Fact";
import { generateRandom } from "@/utils/generateRandom";
import { Ionicons } from "@expo/vector-icons";
import CreateBox from "@/components/CreateBox";
import CreateTodo from "@/components/CreateTodo";

const Home = () => {
  const [fact, setFact] = useState<object>(generateRandom(facts));
  const [createItemsVisible, setCreateItemsVisible] = useState<boolean>(true);
  const [createTodoVisible, setCreateTodoVisible] = useState<boolean>(false);

  const handleToggleCreateItemsVisibility = () =>
    setCreateItemsVisible(!createItemsVisible);

  const handleToggleCreateTodoVisibility = () =>
    setCreateTodoVisible(!createTodoVisible);

  return (
    <SafeAreaView
      style={{
        padding: 14,
      }}
    >
      <Text
        style={{
          fontSize: 15,
          color: colors.textDark,
        }}
      >
        Welcome
      </Text>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Fact fact={fact} />
      </View>
      {createTodoVisible && <CreateTodo />}
      <View
        style={{
          position: "fixed",
          bottom: 120,
          width: window.innerWidth - 26,
          // backgroundColor: "#333",
          padding: 10,
        }}
      >
        {createItemsVisible && <CreateBox />}

        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: "100%",
            backgroundColor: colors.primary,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            right: 24,
            bottom: 0,
          }}
          onPress={() => handleToggleCreateItemsVisibility()}
        >
          <Ionicons name="add-sharp" size={30} color={colors.backgroundLight} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
