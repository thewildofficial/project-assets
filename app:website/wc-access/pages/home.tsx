import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {AppNavigator} from '../Routes/Router';
import navigator from '../App';
import { StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';

export default function App({navigation} : {navigation:any}) {
  const navigationOptions = {
    title: 'Home Page',
  };
    return (

      <View >
        <View style={styles.container}>
      <View ><TouchableOpacity onPress={()=> navigation.navigate("Collar")} style={{width:90,height:40}}>
       <Text  style={styles.textstyle}> WC           COLLAR</Text></TouchableOpacity></View>
       <View><TouchableOpacity onPress={()=> navigation.navigate("Circlet")} style={{width:90,height:40}}>
        <Text  style={styles.textstyle2}>          WC CIRCLET</Text></TouchableOpacity></View>
        
        </View>
        <View  style={styles.container}>
       <Image source = {require('../images/portlog.png')}
       style = {{ width : 1366, height:650 ,position:'absolute',top:200,}}
       /><StatusBar style="auto" /></View>
      </View>
    );
}

const styles = StyleSheet.create({
  textstyle: {
    position:'absolute',
    fontWeight: 'bold',
    color: 'darkgrey',
    fontSize: 20 ,
    top: 100,
  },
  textstyle2: {
    fontWeight: 'bold',
    color: 'darkgrey',
    position: 'absolute',
    fontSize: 20 ,
    top:450,
  },
  container: {
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
  },
});