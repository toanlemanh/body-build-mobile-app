import React from "react";
import Carousel, {ParallaxImage} from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import { View, Text, Platform} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
export default function ImageSlider (){
    return (
        <Carousel
        
            data={sliderImages}
            loop = {false}
            autoplay={true}
            renderItem={ItemCard}
            hasParallaxImages={true}
            sliderWidth={wp(100)}
            firstItem={1}
            autoplayInterval={4000}
            itemWidth={wp(100)-70}
            slideStyle={{display: 'flex', alignItems:'center',}}
        />

    )
}
const ItemCard = ({item, index}, parallaxProps) => {
    return (
        
          <View style={{width: wp(100)-70, height: hp(25), }}>
             <ParallaxImage
               source={item}
               containerStyle={{borderRadius: 30,  flex: 1}}
               style={{ ...Platform.select({
                  ios: {
                    resizeMode: 'cover',
                    borderRadius: 30, 
                  
                    position: 'absolute' 
                  },
                  android:{
                    resizeMode: 'repeat',
                  }
               })}}
               parallaxFactor={1}
               {...parallaxProps}
             />
          </View>
       
    )
}