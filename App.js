import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';


export default function App() {
  return (
    <View style={styles.container}>
    <CarItem 
      name={"MODEL 3"} 
      tagLine={"Order Online for "} 
      tagLineCTA={"Touchless Delivery"}
      image={require('./assets/images/Model3.jpeg')}
      />
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});
