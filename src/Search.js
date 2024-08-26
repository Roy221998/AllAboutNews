import {View, TextInput, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';

import Card from './components/Card';

const Search = ({navigation}) => {
  const [SearchText, setSearchText] = useState('');
  const [Data, setData] = useState([]);
  const searchNews = async text => {
    setSearchText(text);
    if (text.length > 3) {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=195c673b6907416eb063d43913548820&q=${text}`,
      );

      const data = await response.json();
      setData(data.articles);
    }
  };
  return (
    <View className="flex-1">
      <View className="bg-redeprimary flex-row items-center space-x-4 px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={'white'} size={18} />
        </TouchableOpacity>
        <TextInput
          placeholder="Enter your query.."
          value={SearchText}
          placeholderTextColor={'white'}
          onChangeText={text => {
            searchNews(text);
          }}
          className="text-sm text-white"
        />
      </View>

      <View className="mb-16">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Data}
          renderItem={({item, index}) => {
            return <Card item={item} navigation={navigation} index={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default Search;
