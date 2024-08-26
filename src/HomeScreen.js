import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from './components/Header';
import Card from './components/Card';

const HomeScreen = ({navigation}) => {
  const [newsData, setNewsData] = useState([]);
  const [isSelect, setIsSelect] = useState(0);
  const [loading, setLoading] = useState(false);
  const [Category, setCategory] = React.useState([
    {
      id: 1,
      name: 'Top Headlines',
      category: 'general',
    },
    {
      id: 5,
      name: 'Sports',
      category: 'sports',
    },
    {
      id: 2,
      name: 'Business',
      category: 'business',
    },
    {
      id: 3,
      name: 'Entertainment',
      category: 'entertainment',
    },
    {
      id: 4,
      name: 'Health',
      category: 'health',
    },
    {
      id: 6,
      name: 'Science',
      category: 'science',
    },
    {
      id: 7,
      name: 'Technology',
      category: 'technology',
    },
  ]);

  const getData = async () => {
    setLoading(true);
    const url =
      'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=195c673b6907416eb063d43913548820';
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setNewsData(data.articles);
    setLoading(false);
  };
  const getData2 = async () => {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?category=${Category[isSelect].category}&country=in&apiKey=195c673b6907416eb063d43913548820`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setNewsData(data.articles);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    {loading? 
      <View className="flex-1 justify-center items-center">
          <ActivityIndicator color={'#db393c'} size={36} />
        </View>
    :
    <View className="flex-1 ">
      <Header navigation={navigation} />

      {/* Categories */}
      <View className="px-4 py-2">
        <FlatList
          data={Category}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                className={
                  index == isSelect
                    ? 'px-4 py-1  mr-3 rounded-md bg-red-500'
                    : 'px-4 py-1  mr-3 rounded-md bg-gray-200'
                }
                onPress={() => {
                  setIsSelect(index);
                  getData2(); //category function
                }}>
                <Text
                  className={
                    index == isSelect
                      ? 'text-white font-Regular'
                      : 'text-gray-600 font-Regular'
                  }>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      {/* all data */}
      <View className="mb-16">
        <FlatList
          data={newsData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, _}) => (
            <Card item={item} navigation={navigation} />
          )}
        />
      </View>
    </View>}
   
   
    </>
  );
};

export default HomeScreen;
