import { Text, TouchableOpacity, View, TextInput } from "react-native";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}: {
  title: string;
  value?: string;
  placeholder: string;
  handleChangeText?: string;
  otherStyles?: string;
}) => (
  <View className={`space-y-2 ${otherStyles}`}>
    <Text className="text-base text-black font-pmedium">{title}</Text>

    <View className="w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-[#000] focus:border-secondary flex flex-row items-center">
      <TextInput
        className="flex-1 text-black font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7B7B8B"
        //@ts-ignore
        onChangeText={handleChangeText}
        {...props}
      />
    </View>
  </View>
);

const Recoverodal = ({
  new_private_key,
  set_new_private_key,
  set_show_recover_modal,
  handleSetNewPrivateKey,
}: {
  new_private_key: string;
  set_new_private_key: any;
  set_show_recover_modal: any;
  handleSetNewPrivateKey: any;
}) => {
  return (
    <View className="absolute bg-black/70 justify-center items-center w-full h-full  top-0 left-0">
      <View className="bg-[#e5ff57] flex flex-col items-center py-6 px-3 w-full max-w-[300px] rounded-2xl">
        <Text className="font-bold text-left w-full pb-6 text-black text-2xl tracking-wider">
          Recover wallet
        </Text>

        <FormField
          value={new_private_key}
          handleChangeText={set_new_private_key}
          title={"Private key"}
          placeholder={"private key"}
        />
        <TouchableOpacity
          onPress={() => handleSetNewPrivateKey(new_private_key)}
          className="w-full bg-black p-6 rounded-2xl mt-6"
        >
          <Text className="text-[#e5ff57] text-xl text-center w-full font-bold tracking-wider">
            Recover
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => set_show_recover_modal(false)}
          className="w-full rounded-2xl mt-3"
        >
          <Text className="text-black text-sm underline text-center w-full font-bold tracking-wider">
            Close
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Recoverodal;
