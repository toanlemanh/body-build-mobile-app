import { View, Text, FlatList,  TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {FadeInDown, FadeInLeft, FadeInRight} from "react-native-reanimated";

export default BodyParts = () => {
  const router = useRouter();
  return (
    <View className="flex-1 mx-5">
      <Text
        style={{ fontSize: hp(3) }}
        className="font-semibold text-neutral-700"
      >
        Exercise
      </Text>

      <FlatList
        data={bodyParts}
        renderItem={({ item, index }) => (
          <BodyPartCard key={index} index={index} item={item} router={router} />
        )}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}
        columnWrapperStyle={{ justifyContent: "space-around" }}
      ></FlatList>
    </View>
  );
};

const BodyPartCard = ({ item, router, index }) => {
  // console.log(item);
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify().damping(4)}>
      <TouchableOpacity
        style={{ width: wp(40), height: hp(30) }}
        className="flex justify-end mb-4"
        onPress={() => router.push({ pathname: "/exercises", params: item })}
      >
        <Image
         source={item?.image}
          // resizeMode="cover"
          style={{ width: wp(40), height: hp(30) }}
          className="rounded-[25px] absolute"
        />
        <LinearGradient
          colors={["transparent", "black"]}
          style={{ width: wp(40), height: hp(20) }}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1.1 }}
          className="absolute rounded-[25px]"
        />
        <Text
          style={{ fontSize: hp(2.3) }}
          className="flex mb-4 text-white font-semibold tracking-widest text-center "
        >
          {item?.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
