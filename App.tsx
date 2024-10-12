import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,flexDirection:'column'}}> 
    <View style={{flex:1.5,backgroundColor:'black', flexDirection:'row'}}>
      <View style={{flex:1.5,backgroundColor:'black',alignItems:'center',justifyContent:'center'}}>
        <Image source={{uri:'./assets/images/sonyLogo.jpg'}} style={{width:200,height:200, }}></Image>
      </View>
      <View style={{flex:1.5,backgroundColor:'#1E2A5E',alignItems:'center',justifyContent:'center'}} >
        <Text style={{fontSize:50,fontWeight:'600',color:'white'}}>Sony</Text>
      </View>
      <View style={{flex:1.5,backgroundColor:'#021526',alignItems:'flex-start',justifyContent:'space-around'}}>
        <Text style={{fontSize:40,color:'white',fontWeight:'500'}}>Adres:ankara</Text>
        <Text style={{fontSize:40,color:'white',fontWeight:'500'}}>Telefon:+90...</Text>
        <Text style={{fontSize:40,color:'white',fontWeight:'500'}}>Mail:sony@hotmail.com</Text>
      </View>
    </View>
    <View style={{flex:2,backgroundColor:'#243642',flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
    <View style={{backgroundColor:'#243642'}}>
    <Image source={{uri:'./assets/images/sonyA7.avif'}} style={{width:200,height:200,borderRadius:30}}></Image>
    <button style={{backgroundColor:'#402E7A',color:'white',width:200,height:40,borderRadius:30}}>sipariş ver</button> </View>
    <View style={{backgroundColor:'#243642'}}>
    <Image source={{uri:'./assets/images/sonyBurano.avif'}} style={{width:200,height:200,borderRadius:30}}></Image> 
    <button style={{backgroundColor:'#402E7A',color:'white',width:200,height:40,borderRadius:30}}>sipariş ver</button>
    </View>
    <View style={{backgroundColor:'#243642'}}>
    <Image source={{uri:'./assets/images/sony-mobile-allspans.webp'}} style={{width:200,height:200,borderRadius:30}}></Image>
    <button style={{backgroundColor:'#402E7A',color:'white',width:200,height:40,borderRadius:30}}>sipariş ver</button>
    </View>
    </View>
    <View style={{flex:0.2,backgroundColor:'white',alignItems:'center'}}>
      <Text style={{fontWeight:400,fontSize:20}}>Bizi tercih ettiğiniz için teşekkür ederiz!</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
