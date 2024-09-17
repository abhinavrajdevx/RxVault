import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import TopNavMe from "@/components/TopNavMe";
import MeScroll from "@/components/MeScroll";
import { Link, router } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";

const items = [
  {
    id: "1",
    title: "Experiment dog sneeze ",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Human",
    status: "Open",
  },
  {
    id: "2",
    title: "Experiment cat hazard",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Dog",
    status: "Closed",
  },
  {
    id: "3",
    title: "Experiment mklp ",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Cat",
    status: "Closed",
  },
  {
    id: "4",
    title: "Experiment mkl",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Human",
    status: "Open",
  },
];

const handleClick = (id: string) => {
  router.push("/trial/" + id);
};

export default function Me() {
  const [focused, set_focused] = useState("Open");

  return (
    <SafeAreaView className="flex-1 bg-[#0c0c0e]">
      <View className="mx-6 my-9">
        <View className="mb-[40px] flex flex-row justify-between items-center">
          <Icon name="user" size={25} color="#fbf9fc" />

          <Text className="text-[#fdfdfd] font-psemibold tracking-wider text-center text-2xl">
            My Researchs
          </Text>

          <Link href="/create">
            <Icon name="pluscircleo" size={25} color="#fbf9fc" />
          </Link>
        </View>

        <TopNavMe focused={focused} set_focused={set_focused} />
        <MeScroll handleClick={handleClick} focused={focused} items={items} />
      </View>
    </SafeAreaView>
  );
}
