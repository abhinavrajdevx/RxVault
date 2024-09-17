import { View, Text, ScrollView } from "react-native";
import React from "react";
import TrialBar from "./TrialBar";

const TrialScroll = ({
  items,
  focused,
  handleClick,
}: {
  items: any;
  focused: string;
  handleClick: any;
}) => {
  return (
    <View className="mt-[30px]">
      <ScrollView>
        {items.map((item: any, index: number) => (
          <>
            {focused === item.category && (
              <TrialBar handleClick={handleClick} key={index} item={item} />
            )}
          </>
        ))}
      </ScrollView>
    </View>
  );
};

export default TrialScroll;
