import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ArrowRightIcon} from 'react-native-heroicons/solid';

const Card = ({item,navigation}) => {
  // console.log(item.urlToImage)
  return (
    <View className="px-4 py-2 mb-4 ">
      <Image
        source={{
          uri: item.urlToImage
            ? item.urlToImage
            : 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
        className="h-52 w-full rounded-md"
        resizeMethod="resize"
      />

      <View className="px-2 my-2">
        <Text className="text-sm text-gray-700 font-SemiBold">
          {item.title}
        </Text>
        <Text className="text-xs my-2  ">{item.description}</Text>
        <View className="flex-row justify-between items-center  my-2">
          <Text className="text-xs  text-gray-700 ">{item.author}</Text>
          <Text className="text-xs text-gray-700 ">
            {item.publishedAt.toLocaleString('en-GB', {timeZone: 'UTC'})}
          </Text>
        </View>
        <TouchableOpacity
          className="bg-red-400 px-4 py-1.5 mt-2 w-32 justify-center items-center rounded-md flex-row space-x-2"
          onPress={() =>
            navigation.navigate('NewsViewer', {
              url: item.url,
            })
          }>
          <Text className="text-white text-xs font-Medium">Read More</Text>
          <ArrowRightIcon color="#fff" size={18} />
        </TouchableOpacity>
      </View>

      <View className="absolute top-4 right-4 bg-black px-4 rounded-md">
        <Text className="text-xs text-white py-1 font-bold">
          {item.source.name}
        </Text>
      </View>
    </View>
  );
};

export default Card;
