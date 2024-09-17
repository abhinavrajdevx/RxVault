import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const AddressBar = ({
  public_key,
  show_balance,
}: {
  public_key: string;
  show_balance?: boolean;
}) => (
  <View>
    {show_balance && (
      <Text className="text-black w-full px-3 font-black tracking-widest text-3xl">
        100.000 ETH
      </Text>
    )}
    <View className="flex flex-row items-center">
      <Text className="text-black px-4 font-psemibold tracking-widest text-xs">
        {public_key.slice(0, 15)} {"..."} {public_key.slice(32, 41)}
      </Text>
      <Icon name="copy1" size={20} color="#000" />
    </View>
  </View>
);

export default AddressBar;
