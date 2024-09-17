import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import React from "react";

const TrialBar = ({ item, handleClick }: { item: any; handleClick: any }) => {
  return (
    <View className="mb-6">
      <View className="w-full flex-col">
        <View className="flex gap-2 flex-row items-center">
          <Icon name="book-medical" size={20} color="#fff" />
          <Text className="text-white font-psemibold tracking-wider text-base">
            {item.title}
          </Text>
        </View>
        <Text className="text-[#89898b] mt-2 font-light tracking-tighter">
          {item.description.slice(0, 100)} {"..."}
        </Text>
        <TouchableOpacity onPress={() => handleClick(item.id)} className="mt-1">
          <Text className="font-psemibold tracking-tighter text-[#a291de]">
            Read more
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TrialBar;
