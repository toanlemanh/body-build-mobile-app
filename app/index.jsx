import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  FadeIn,
  FadeInDown,
  FadeInUp,
  FadeOut,
} from "react-native-reanimated";
import { useRouter } from "expo-router";
// import { fetchExercises } from "../api/exerciseDb";
export default function Index() {
  const router = useRouter();
  useEffect(() => {
    // fetchExercises();
  }, []);

  return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image
        className="w-full h-full absolute"
        source={require("../assets/images/first-bg.jpg")}
      />
      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(70) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pd-12 space-y-8"
      >
        <Animated.View
          entering={FadeInUp.delay(100).springify()}
          className="flex items-center"
        >
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            Best <Text className="text-rose-500">Workout</Text>
          </Text>
          <Text
            style={{ fontSize: hp(5) }}
            className="text-white font-bold tracking-wide"
          >
            For you
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => {
              router.push("home");
            }}
            style={{ width: wp(80), height: hp(7) }}
            className="flex justify-center items-center bg-rose-500 mx-auto rounded-full border-[2px] border-neutral-200 "
          >
            <Text
              style={{ fontSize: hp(3) }}
              className="text-white font-bold tracking-widest"
            >
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
}
