import { Text, TouchableOpacity, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import AddressBar from "./AddressBar";

const DepositModal = ({
  public_address,
  set_show_deposit_modal,
}: {
  public_address: string;
  set_show_deposit_modal: any;
}) => (
  <View className="absolute bg-black/70 justify-center items-center w-full h-full  top-0 left-0">
    <View className="bg-[#e5ff57] flex flex-col items-center py-6 px-3 w-full max-w-[300px] rounded-2xl">
      <Text className="font-bold text-left w-full pb-6 text-black text-2xl tracking-wider">
        Deposit Funds
      </Text>
      <QRCode
        size={200}
        color={"#000"}
        backgroundColor={"#e5ff57"}
        logoBackgroundColor="transparent"
        value={public_address}
      />
      <View className="mt-3">
        <AddressBar public_key={public_address} />
      </View>

      <TouchableOpacity
        onPress={() => set_show_deposit_modal(false)}
        className="w-full bg-black p-6 mt-6 rounded-2xl"
      >
        <Text className="text-[#e5ff57] text-xl text-center w-full font-bold tracking-wider">
          Done
        </Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default DepositModal;
