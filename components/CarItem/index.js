import React from 'react';
import {Text,View,ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import CustomButton from '../Custombutton';



const CarItem = (props)=>{
    return(
    <View style={styles.carContainer}>
    
        <ImageBackground 
          style={styles.image} 
          source={require('../../assets/images/ModelS.jpeg')}>
        </ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at 69,000$</Text>
        
    </View> 
    <CustomButton type="primary" content={"CUSTOM ORDER"} onPress={()=>{console.warn('Custom order was pressed')}}/>
    <CustomButton type="Secondary" content={"EXISTING INVENTORY"} onPress={()=>{console.warn('EXISTING INVENTORY was pressed')}}/>
    </View>
    
    );
};

export default CarItem;