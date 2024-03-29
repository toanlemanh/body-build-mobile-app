import {  Image, TouchableOpacity, View } from "react-native";
// import { Image } from "expo-image";
import { useRouter, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { fetchBodyPartExercise } from "../api/exerciseDb";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import ExerciseList from "../components/ExerciseList";
import { ScrollView } from "react-native-virtualized-view";
import Animated, { FadeInLeft } from "react-native-reanimated";
export default Exercises = () => {
  const item = useLocalSearchParams();
  const router = useRouter();
  const [bodyPartExercise, setBodyPartExercise] = useState();
  useEffect(() => {
    item && fetchExercise(item.name);
  }, [item]);

  async function fetchExercise(bodyPart) {
    let data = await fetchBodyPartExercise(bodyPart);
    // console.log("dummy", data);
    setBodyPartExercise(data);
  }
  return (
    <ScrollView>
      <StatusBar style="light" />
      <Image source={item?.image} style={{ width: wp(100), height: hp(45) }} />
      {
        console.log('image',item?.image) 
      }
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
      <View className="mx-4 space-y-3 mt-4">
        <Animated.Text entering={FadeInLeft.duration(400).delay(100).springify()}
          className="font-semibold text-neutral-700 tracking-wider"
          style={{ fontSize: hp(3) }}
        >
          {item.name} excercises
        </Animated.Text>
        <View>
          <ExerciseList data={bodyPartExercise} />
        </View>
      </View>
    </ScrollView>
  );
};
