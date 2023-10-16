import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {

  return (
    <RootNavigator/>
  );
}

const styles = StyleSheet.create({

  container:{
      flex:1, 
  },
  
})
