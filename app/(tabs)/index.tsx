import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import TopNavBar from "@/components/TopNavBar";
import TrialScroll from "@/components/TrialScroll";
import { Link, router } from "expo-router";

const items = [
  {
    title: "Experiment dog sneeze ",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Human",
    id: "1",
  },
  {
    title: "Experiment cat hazard",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Dog",
    id: "2",
  },
  {
    title: "Experiment mklp ",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Cat",
    id: "3",
  },
  {
    title: "Experiment mkl",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Human",
    id: "4",
  },
];

const handleClick = (id: string) => {
  router.replace("/create");
};

export default function App() {
  const [focused, set_focused] = useState("Human");

  return (
    <SafeAreaView className="flex-1 bg-[#0c0c0e]">
      {/* <View className="mx-6 my-9">
        <View className="mb-[40px] flex flex-row justify-between items-center">
          <Icon name="home" size={25} color="#fbf9fc" />
          <Text className="text-[#fdfdfd] font-psemibold tracking-wider text-center text-2xl">
            Home
          </Text>
          <Icon name="exclamationcircleo" size={15} color="#fbf9fc" />
        </View>

        <TopNavBar focused={focused} set_focused={set_focused} />
        <TrialScroll
          handleClick={handleClick}
          focused={focused}
          items={items}
        />
      </View> */}
    </SafeAreaView>
  );
}
