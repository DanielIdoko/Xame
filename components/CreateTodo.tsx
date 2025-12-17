import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";

type todoProps = {
  id: string | number;
  title: string;
  body: string;
  tags: String[];
};

const CreateTodo = () => {
  const [todo, setTodo] = useState<todoProps>({
    id: "",
    title: "",
    body: "",
    tags: [],
  });
  return (
    <View>
      <Text>Title</Text>
      <TextInput
        placeholder="Enter title here"
        value=""
        onChangeText={() => {}}
      />
      <View>
        <Text>Add Tags</Text>
        <TextInput
          placeholder="home, school, work"
          value=""
          onChangeText={() => {}}
        />
        <TouchableOpacity>Add tag</TouchableOpacity>
      </View>

      <Text>Body</Text>
      <TextInput
        placeholder="Enter todo here"
        value=""
        onChangeText={() => {}}
      />
    </View>
  );
};

export default CreateTodo;
