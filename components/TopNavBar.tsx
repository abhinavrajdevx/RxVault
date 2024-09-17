import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Custombutton = ({
  title,
  focused,
  set_focused,
}: {
  title: string;
  focused: boolean;
  set_focused: any;
}) => (
  <TouchableOpacity
    className={`${
      focused ? "bg-[#edff8f]" : "bg-[#1e1c20]"
    }  rounded-3xl px-6 py-1`}
    onPress={() => set_focused(title)}
  >
    <Text
      className={`${
        focused ? "text-[#0c0c0e]" : "text-[#9c98a0]"
      } font-bold text-base`}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const buttons = [
  {
    title: "Human",
  },
  {
    title: "Dog",
  },
  {
    title: "Cat",
  },
];

const TopNavBar = ({
  focused,
  set_focused,
}: {
  focused: string;
  set_focused: any;
}) => {
  return (
    <View className="">
      <View className="flex flex-row  w-full" style={{ gap: 18 }}>
        {buttons.map((item) => (
          <Custombutton
            focused={item.title === focused ? true : false}
            set_focused={set_focused}
            key={item.title}
            title={item.title}
          />
        ))}
      </View>
    </View>
  );
};

export default TopNavBar;
