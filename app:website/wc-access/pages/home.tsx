import { StatusBar } from 'expo-status-bar';
import React from 'react';
import appp from '../App';
import { StyleSheet, Text, View , Image, TouchableHighlight } from 'react-native';
export default function App() {
  const navigationOptions = {
    title: 'Home Page',
    //Sets Header text of Status Bar
  };

    return (

      <View style={styles.container}>
        <View>
        <Text style={styles.textstyle}>WC COLLAR</Text></View>
        <Image source = {require('../images/portlog.png')}
       style = {{ width : 1366, height:650 ,}}
       />
       <View>
        <Text  style={styles.textstyle2}>WC CIRCLET</Text></View>
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  textstyle: {
    marginTop: 130 ,
    marginBottom:-150 ,
    fontWeight: 'bold',
    color: 'darkgrey',
    textDecorationLine: 'underline'
  },
  textstyle2: {
    fontWeight: 'bold',
    color: 'darkgrey',
    marginTop:-150 ,
    marginBottom: 100 ,
    textDecorationLine: 'underline'
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