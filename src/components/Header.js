import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';

const Header = ({navigation}) => {
  return (
    <View className="flex-row justify-between items-center px-4 py-2 bg-white shadow-lg">
      <Text className="text-base font-semibold text-redeprimary">
        All About News🗞️
      </Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <MagnifyingGlassIcon color="#000000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
