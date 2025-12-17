import { colors } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
interface TabBarIconProps {
  focused: boolean;
  Icon: any;
  title: string;
}

// TabBarIcon Component
const TabBarIcon = ({ focused, Icon, title }: TabBarIconProps) => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* <Icon
        color={focused ? colors.primary : colors.muted}
      /> */}
    {Icon}
    <Text
      style={{
        fontSize: 15,
        color: focused ? colors.primary : colors.textDark,
        fontWeight: focused ? "bold" : "normal",
      }}
    >
      {title}
    </Text>
  </View>
);

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#f2f2f2",
          height: 75,
          width: '95%',
          position: "absolute",
          bottom: 20,
          left: 10,
          borderRadius: 40,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Home"
              Icon={
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  size={22}
                  color={focused ? colors.primary : colors.textDark}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Search"
              Icon={
                <Ionicons
                  name={focused ? "search-sharp" : "search-outline"}
                  size={22}
                  color={focused ? colors.primary : colors.textDark}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          title: "AI",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="AI"
              Icon={
                <Ionicons
                  name={focused ? "chatbox-sharp" : "chatbox-outline"}
                  size={22}
                  color={focused ? colors.primary : colors.textDark}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="collections"
        options={{
          title: "Collections",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Collections"
              Icon={
                <Ionicons
                  name={focused ? "albums-sharp" : "albums-outline"}
                  size={22}
                  color={focused ? colors.primary : colors.textDark}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="quizzes"
        options={{
          title: "Quiz",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              title="Quiz"
              Icon={
                <Ionicons
                  name={focused ? "trophy-sharp" : "trophy-outline"}
                  size={22}
                  color={focused ? colors.primary : colors.textDark}
                />
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
