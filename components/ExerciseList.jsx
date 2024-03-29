import { useRouter } from "expo-router";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, {FadeInDown, FadeInRight} from "react-native-reanimated";
export default ExerciseList = ({ data }) => {
  const router = useRouter();
  return (
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <ExerciseCard key={index} index={index} item={item} router={router} />
      )}
      numColumns={2}
      keyExtractor={(item) => item.name}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 60, paddingTop: 20 }}
      columnWrapperStyle={{ justifyContent: "space-around" }}
    ></FlatList>
  );
};

const ExerciseCard = ({ item, router, index }) => {
  return (
    <Animated.View entering={FadeInDown.duration(400).delay(index*200).springify()}>
      <TouchableOpacity className="flex py-3 space-y-2"
         onPress={() => router.push({ pathname: '/exerciseDetails', params: item})}
      >
        <View
      //  style={{width: wp(40), height: 50}}
        className="bg-rose-200 shadow rounded-[25px]">
          <Image
            source={{ uri: item?.gifUrl }}
             style={{ width: wp(43), height: hp(30) }}
            className="rounded-[25px]"
            contentFit="cover"
          />
        </View>
        <Animated.Text entering={FadeInDown.duration(400).delay(index*200).springify()}
            style={{fontSize: hp(1.7)}}
            className='text-neutral-700 font-semibold ml-1 tracking-wide'
        >
          {item?.name.length>20? item.name.slice(0,20)+'...' : item.name}
        </Animated.Text>
      </TouchableOpacity>
    </Animated.View>
  );
};
