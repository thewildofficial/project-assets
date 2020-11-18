import { StatusBar } from 'expo-status-bar';
import React from 'react';
import appp from '../App';
import { StyleSheet, Text, View , Image, TouchableHighlight } from 'react-native';
export default function App() {
  const navigationOptions = {
    title: 'COLLAR PAGE',
    //Sets Header text of Status Bar
  };

    return (

      <View style={styles.container}>
        <View>
        <Text style={styles.textstyle}>WC COLLAR</Text></View>

       <View style={styles.lg}></View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  lg: {
    paddingHorizontal: 690,
    paddingVertical:  300,
    backgroundColor: '#00592f',

    },
  textstyle: {
    fontWeight: 'bold',
    color: 'darkgrey',
    fontSize: 20 ,
  },
  container: {
    position: 'absolute',
    flex:1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems:'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});