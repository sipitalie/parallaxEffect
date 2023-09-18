import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import oneImg from "./src/assets/landscapeOne.jpg"
import twoImg from "./src/assets/landscapeTwo.jpg"
import threeImg from "./src/assets/landscapeThree.jpg"
import { Card } from './src/components/Card';
import { Header } from './src/components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const data= [
    { 
    img:oneImg,
    stars:4.6,
    title:"one",
    location:"any location" 
    },
    {
      img:twoImg,
      stars:3.7,
      title:"two",
      location:"any location"
    },
    {
      img:threeImg,
      stars:4.6,
      title:"three",
      location:"any location"}
  ]
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

      <FlatList 
        data={data} 
        horizontal

        contentContainerStyle={{
          paddingVertical:22,
        }}

        renderItem={({item})=><Card source={item.img} item={{
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
