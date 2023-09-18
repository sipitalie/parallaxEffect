import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Animated, FlatList, View, Text } from 'react-native';
import oneImg from "./src/assets/landscapeOne.jpg"
import twoImg from "./src/assets/landscapeTwo.jpg"
import threeImg from "./src/assets/landscapeThree.jpg"
import { Card } from './src/components/Card';
import { Header } from './src/components/Header';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';
export default function App() {
  const data= [
    { 
      key:"001",
    img:oneImg,
    stars:4.6,
    title:"one",
    location:"any location" 
    },
    
    {
      key:"008",
      img:threeImg,
      stars:4.6,
      title:"three",
      location:"any location"},
    {
      key:"002",
      img:twoImg,
      stars:3.7,
      title:"two",
      location:"any location"
    },
    { 
      key:"006",
    img:oneImg,
    stars:4.6,
    title:"one",
    location:"any location" 
    },
    {
      key:"003",
      img:threeImg,
      stars:4.6,
      title:"three",
      location:"any location"},
      { 
        key:"007",
      img:oneImg,
      stars:4.6,
      title:"one",
      location:"any location" 
      },
  ]

  const scrollX = useRef(new Animated.Value(0)).current;




  return (
    <SafeAreaProvider>
    <View style={styles.container}>
      <Header>
        <View style={{
          width:"100%",
          flexDirection:"row",
          alignItems:"center",
          justifyContent:"space-between"
        }}>
          <Text style={{
            color:"#fff",
            fontSize:22,
            fontWeight:"bold"
            }}>Discover</Text>
            <Ionicons name="search" size={22} color="#fff" />
        </View>

      </Header>

      <Animated.FlatList 
        data={data} 
        keyExtractor={item=>item.key}
       // pagingEnabled

        onScroll={Animated.event([{nativeEvent:{contentOffset:{x:scrollX}}}],
          {useNativeDriver:true})}
       
        horizontal

        contentContainerStyle={{
          paddingVertical:22,
        }}

        renderItem={({item,index})=><Card index={index} position={scrollX} source={item.img} item={{
        stars:item.stars,
        location:item.location,
        title:item.title
      }}/>} />
      <StatusBar style="light" />
    </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
