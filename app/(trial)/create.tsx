import FormField from "@/components/FormField";
import { useGlobalContext } from "@/context/GlobalProvider";
import { createTrial } from "@/scripts/contract_functions";
import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

export default function App() {
  const { private_key } = useGlobalContext();

  const handleCreateClick = async () => {
    console.log(private_key);
    await createTrial(private_key);
  };

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
            Create
          </Text>
          <Icon name="exclamationcircleo" size={15} color="#fbf9fc" />
        </View>
        <View className="w-full">
          <FormField title="Title" placeholder="title" />
          <View className="mt-3"></View>
          <FormField title="Description" placeholder="title" />
          <TouchableOpacity
            onPress={handleCreateClick}
            className="rounded-2xl mt-6 w-full p-6 bg-[#a291de]"
          >
            <Text className="w-full  text-center font-bold tracking-wider text-xl text-black">
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
