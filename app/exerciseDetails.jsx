import { useLocalSearchParams, useRouter } from "expo-router";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { bodyParts } from "../constants";
import Animated, {FadeInUp} from "react-native-reanimated";

export default ExerciseDetails = () => {
  const router = useRouter();
  const item = useLocalSearchParams();
  console.log("item", item);
  return (
    <ScrollView>
      <StatusBar style="light" />
      <View
       
      > 
      <Image
         className='shadow-md rounded-b-[30px]'
        source={
          item ? { uri: item?.gifUrl } : require("../assets/images/cardio.jpg")
        }
        style={{ width: wp(100), height: hp(45), }}
      />
       </View>
      <TouchableOpacity
        className="absolute rounded-full mt-10 ml-5"
        onPress={() => router.back()}
      >
        <Ionicons
          name="caret-back-circle"
          size={hp(5)}
          className="text-center"
          color={"red"}
        />
      </TouchableOpacity>
      <Animated.View 
       entering={FadeInUp.duration(400).delay(300).springify()}
      className="mx-4 space-y-3 mt-4 pb-[60px]" >
        <Text
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3) }}
        >
          {item ? item.name : "cardio"} details
        </Text>
        <Text className="text-neutral-800 tracking-wide" fontSize={hp(2)}>
          Equipment{" "}
          <Text className="text-neutral-800 font-bold">{item?.equipment}</Text>
        </Text>
        <Text className="text-neutral-800 tracking-wide" fontSize={hp(2)}>
          Secondary Muscles{" "}
          <Text className="text-neutral-800 font-bold">
            {item?.secondaryMuscles}
          </Text>
        </Text>
        <Text className="text-neutral-800 tracking-wide" fontSize={hp(2)}>
          Target{" "}
          <Text className="text-neutral-800 font-bold">{item?.target}</Text>
        </Text>
        <Text
          className="font-semibold text-neutral-800 tracking-wide"
          style={{ fontSize: hp(3) }}
        >
          Instructions
        </Text>
        { item?.instructions?.split(",").map((instruction, index) => (
              <Text style={{ fontSize: hp(1.7) }} key={index}
                 className='text-neutral-800'
              >
                {instruction}
              </Text>
            ))
          }
      </Animated.View>
    </ScrollView>
  );
};
