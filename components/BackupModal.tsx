import { Text, TouchableOpacity, View } from "react-native";

const BackupModal = ({
  private_key,
  set_show_backup_modal,
}: {
  private_key: string;
  set_show_backup_modal: any;
}) => (
  <View className="absolute bg-black/70 justify-center items-center w-full h-full  top-0 left-0">
    <View className="bg-[#e5ff57] flex flex-col items-center py-6 px-3 w-full max-w-[300px] rounded-2xl">
      <Text className="font-bold text-left w-full pb-6 text-black text-2xl tracking-wider">
        Private key
      </Text>
      <Text className="text-black px-4 font-psemibold tracking-wider text-base">
        {private_key}
      </Text>
      <Text className="text-black px-4 font-black tracking-wider text-xs my-6">
        !! Copied to clipboard !!
      </Text>
      <TouchableOpacity
        onPress={() => set_show_backup_modal(false)}
        className="w-full bg-black p-6 rounded-2xl"
      >
        <Text className="text-[#e5ff57] text-xl text-center w-full font-bold tracking-wider">
          Done
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default BackupModal;
