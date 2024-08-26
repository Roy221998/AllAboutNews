import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center bg-redeprimary">
      <Animatable.Text
        className="text-4xl text-white font-bold"
        animation="fadeInDownBig"
        duration={2000}>
        All About News🗞️
      </Animatable.Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
