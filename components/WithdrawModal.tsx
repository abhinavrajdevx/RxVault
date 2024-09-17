//@ts-nocheck
import { Text, TouchableOpacity, View, TextInput } from "react-native";

import React, { Component } from "react";
import { Platform, StyleSheet } from "react-native";
import { QRscanner } from "react-native-qr-decode-image-camera";

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

class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: false,
      zoom: 0.2,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <QRscanner
          onRead={this.onRead}
          renderBottomView={this.bottomView}
          flashMode={this.state.flashMode}
          zoom={this.state.zoom}
          finderY={50}
        />
      </View>
    );
  }
  bottomView = () => {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "#0000004D" }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => this.setState({ flashMode: !this.state.flashMode })}
        >
          <Text style={{ color: "#fff" }}>йоба-боба-функция</Text>
        </TouchableOpacity>
      </View>
    );
  };
  onRead = (res) => {
    console.log(res);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

const WithdrawModal = ({
  new_private_key,
  set_new_private_key,
  set_show_withdraw_modal,
  handleSetNewPrivateKey,
}: {
  new_private_key: string;
  set_new_private_key: any;
  set_show_withdraw_modal: any;
  handleSetNewPrivateKey: any;
}) => {
  return (
    <View className="absolute bg-black/70 justify-center items-center w-full h-full  top-0 left-0">
      <View className="bg-[#e5ff57] flex flex-col items-center py-6 px-3 w-full max-w-[300px] rounded-2xl">
        <Text className="font-bold text-left w-full pb-6 text-black text-2xl tracking-wider">
          Withdraw funds
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
            Send
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => set_show_withdraw_modal(false)}
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

export default WithdrawModal;
