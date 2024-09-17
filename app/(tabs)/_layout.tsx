import { Redirect, Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Text, View } from "react-native";

import Icon from "react-native-vector-icons/AntDesign";
import { useGlobalContext } from "../../context/GlobalProvider";

export default function TabLayout() {
  const { firstTime } = useGlobalContext();
  if (firstTime == "YES") return <Redirect href="/welcome" />;

  const colorScheme = useColorScheme();

  const TabIcon = ({
    icon,
    color,
    name,
    focused,
  }: {
    icon: string;
    color: string;
    name: string;
    focused: boolean;
  }) => {
    return (
      <View className="flex items-center justify-center gap-2">
        <Icon
          className="bg-blue-700"
          name={icon}
          size={25}
          color={focused ? color : "#aaaaaa"}
        />
        <Text
          className={`
          } text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#a291de",
        tabBarInactiveTintColor: "#fdfdfd",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0c0c0e",
          borderTopWidth: 2,
          borderTopColor: "#232533",
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Research",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"home"}
              color={color}
              name={"Home"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="me"
        options={{
          title: "Me",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"user"}
              color={color}
              name={"Me"}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={"wallet"}
              color={color}
              name={"Wallet"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
