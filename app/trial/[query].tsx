import FormField from "@/components/FormField";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useLocalSearchParams } from "expo-router";
const items = [
  {
    title: "Experiment dog sneeze ",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Human",
  },
  {
    title: "Experiment cat hazard",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Dog",
  },
  {
    title: "Experiment mklp ",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Cat",
  },
  {
    title: "Experiment mkl",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    category: "Human",
  },
];

export default function App() {
  const [focused, set_focused] = useState("Human");
  const { query } = useLocalSearchParams();
  console.log(query);
  useEffect(() => {}, [query]);

  return (
    <SafeAreaView className="flex-1 bg-[#0c0c0e]">
      <View className="mx-6 my-9">
        <View className="mb-[40px] flex flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => router.back()}
            className=" rounded-full bg-gray-700 p-1 flex items-center justify-center"
          >
            <Icon name="left" size={25} color="#fbf9fc" />
          </TouchableOpacity>

          <Text className="text-[#fdfdfd] font-psemibold tracking-wider text-center text-2xl">
            Researches
          </Text>
          <Icon name="exclamationcircleo" size={15} color="#fbf9fc" />
        </View>
        <View className="w-full">
          <TouchableOpacity className="rounded-2xl mt-6 w-full p-6 bg-[#a291de]">
            <Text className="w-full  text-center font-bold tracking-wider text-xl text-black">
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
