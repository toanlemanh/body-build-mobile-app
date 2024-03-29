import { StatusBar } from "expo-status-bar";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { View, Text, Image, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";
import BodyParts from "../components/BodyParts";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
export default function Home() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white flex space-y-5 pt-2" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center mx-5">
        <View clasName="space-y-2">
          <Text
            className="text-neutral-700 font-bold tracking-wider"
            style={{ fontSize: hp(5) }}
          >
            READY TO
          </Text>
          <Text
            className="text-rose-500 font-bold tracking-wide"
            style={{ fontSize: hp(4.5) }}
          >
            WORKOUT
          </Text>
        </View>
        <View className="flex justify-center items-center space-y-2">
          <TouchableOpacity
             onPress={() => router.back()}
          >
             <Image
            className="rounded-full"
            style={{ height: hp(5), width: wp(10) }}
            source={require("../assets/images/avatar.jpg")}
          />
          </TouchableOpacity>
         
          <View
          style={{height: hp(5.5), width: wp(11.5)}}
          className="flex justify-center items-center bg-neutral-200 rounded-full border-[3px] border-neutral-100">
            <Icon name="bell" size={hp(3)} color={'gray'}/>
          </View>
        </View>
      </View>
      {/* punch line, avatar */}

      {/* Image Slider */}
      <View>
          <ImageSlider />
      </View>

      <View className='flex-1'>
          <BodyParts/>
      </View>
    </SafeAreaView>
  );
}
