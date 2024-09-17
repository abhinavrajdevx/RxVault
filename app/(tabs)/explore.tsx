import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useGlobalContext } from "../../context/GlobalProvider";
import {
  convertPrivateToPublic,
  createRandomWallet,
  getBalance,
} from "@/scripts/wallet_functions";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import DepositModal from "@/components/DepositModal";
import BackupModal from "@/components/BackupModal";
import Recoverodal from "@/components/RecoverModal";
import WithdrawModal from "@/components/WithdrawModal";

const PageHeading = () => (
  <View className="w-[200px] h-[50px] border-none flex justify-center items-center rounded-b-2xl bg-[#0c0c0e]">
    <Text className="text-[#fdfdfd] w-full text-center font-black tracking-wider text-2xl">
      Wallet
    </Text>
  </View>
);

const AddressBar = ({
  public_key,
  show_balance,
  balance,
}: {
  public_key: string;
  show_balance?: boolean;
  balance: string;
}) => (
  <View>
    {show_balance && (
      <Text className="text-black w-full px-3 font-black tracking-widest text-3xl">
        {balance} ETH
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

const WalletButtons = ({
  set_show_deposit_modal,
  set_show_withdraw_modal,
}: {
  set_show_deposit_modal: any;
  set_show_withdraw_modal: any;
}) => (
  <View className="w-full flex-row justify-between px-2">
    <TouchableOpacity
      onPress={() => set_show_deposit_modal(true)}
      className="flex-grow bg-black p-6 flex-row justify-between mr-1 rounded-2xl"
    >
      <Text className="text-white font-bold tracking-wider  text-center text-base">
        {"Deposit  "}
      </Text>
      <Icon name="arrowdown" size={25} color="#e5ff57" />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => set_show_withdraw_modal(true)}
      className="flex-grow bg-black p-6 flex-row justify-between ml-1 rounded-2xl"
    >
      <Text className="text-white font-bold  tracking-wider text-center text-base">
        {"Withdraw"}
      </Text>
      <Icon name="arrowup" size={25} color="#e5ff57" />
    </TouchableOpacity>
  </View>
);

const BottomButtons = ({
  set_show_backup_modal,
  set_show_recover_modal,
}: {
  set_show_backup_modal: any;
  set_show_recover_modal: any;
}) => (
  <View className="mt-0 w-full">
    <TouchableOpacity
      className="w-full bg-[#a291de] p-6 rounded-2xl flex flex-row justify-between"
      onPress={() => set_show_recover_modal(true)}
    >
      <Text className="font-bold text-black text-xl tracking-wider">
        Recover
      </Text>
      <MaterialCommunityIcons name="backup-restore" size={35} color="#000" />
    </TouchableOpacity>
    <TouchableOpacity
      className="w-full bg-[#a291de] p-6 rounded-2xl mt-3 flex flex-row justify-between"
      onPress={() => set_show_backup_modal(true)}
    >
      <Text className="font-bold text-black text-xl tracking-wider">
        Backup
      </Text>
      <MaterialIcons name="password" size={35} color="#000" />
    </TouchableOpacity>
  </View>
);

export default function Wallet() {
  const { firstTime, set_firstTime, set_private_key, private_key } =
    useGlobalContext();

  const [new_private_key, set_new_private_key] = useState("");

  const [public_key, set_public_key] = useState<string>("");
  const [balance, set_balance] = useState("");
  const [show_deposit_modal, set_show_deposit_modal] = useState(false);
  const [show_backup_modal, set_show_backup_modal] = useState(false);
  const [show_recover_modal, set_show_recover_modal] = useState(false);
  const [show_withdraw_modal, set_show_withdraw_modal] = useState(false);

  const handleSetNewPrivateKey = async (pvt_key: string) => {
    const privatekeyStorage = useAsyncStorage("privateKey");
    await privatekeyStorage.setItem(pvt_key);
    set_private_key(pvt_key);
    set_new_private_key("");
    set_show_recover_modal(false);
  };

  useEffect(() => {
    const regularOps = async () => {
      const _public_key: string = convertPrivateToPublic(private_key);
      set_public_key(_public_key);
      const _balance = await getBalance(_public_key);
      //@ts-ignore
      set_balance(_balance);
    };
    const FirstTimeOpenOps = async () => {
      const firstTimeStorageValue = useAsyncStorage("FirstTime");
      await firstTimeStorageValue.setItem("NO");
      set_firstTime("NO");

      if (firstTime != "NO") {
        const _random_private_key = createRandomWallet();
        const privatekeyStorage = useAsyncStorage("privateKey");
        await privatekeyStorage.setItem(_random_private_key);
        set_private_key(_random_private_key);
        const _public_key: string = convertPrivateToPublic(_random_private_key);
        console.log("Random address :  ", _public_key);
        const _balance = await getBalance(_public_key);
        //@ts-ignore
        set_balance(_balance);
        set_public_key(_public_key);
      } else {
        regularOps();
      }
    };

    FirstTimeOpenOps();
  }, [private_key]);

  return (
    <SafeAreaView className="flex-1 bg-[#0e0c0c] ">
      <View className="mx-6 mt-9 flex-grow">
        <View className="mb-[40px] flex flex-col h-min bg-[#e5ff57] items-center rounded-2xl">
          <PageHeading />
          <View className="mt-9">
            <AddressBar
              balance={balance}
              show_balance
              public_key={public_key}
            />
            <View className="mb-6 mt-6">
              <WalletButtons
                set_show_deposit_modal={set_show_deposit_modal}
                set_show_withdraw_modal={set_show_withdraw_modal}
              />
            </View>
          </View>
        </View>

        <View className="flex-grow mb-6 justify-end">
          <BottomButtons
            set_show_backup_modal={set_show_backup_modal}
            set_show_recover_modal={set_show_recover_modal}
          />
        </View>
      </View>
      {show_deposit_modal && (
        <DepositModal
          set_show_deposit_modal={set_show_deposit_modal}
          public_address={public_key}
        />
      )}
      {show_backup_modal && (
        <BackupModal
          private_key={private_key}
          set_show_backup_modal={set_show_backup_modal}
        />
      )}
      {show_recover_modal && (
        <Recoverodal
          new_private_key={new_private_key}
          set_show_recover_modal={set_show_recover_modal}
          set_new_private_key={set_new_private_key}
          handleSetNewPrivateKey={handleSetNewPrivateKey}
        />
      )}
      {show_withdraw_modal && (
        <WithdrawModal
          new_private_key={new_private_key}
          set_show_withdraw_modal={set_show_withdraw_modal}
          set_new_private_key={set_new_private_key}
          handleSetNewPrivateKey={handleSetNewPrivateKey}
        />
      )}
    </SafeAreaView>
  );
}
