import React from 'react';
import {Text,View,ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import CustomButton from '../Custombutton';



const CarItem = (props)=>{

  const {name,tagLine,image,tagLineCTA} = props; 
    return(
    <View style={styles.carContainer}>
    
        <ImageBackground 
          style={styles.image} 
          source={image}>
        </ImageBackground>
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{tagLine} 
        {''}
        <Text style={styles.subtitleCTA}>{tagLineCTA}</Text></Text>
        
    </View> 
    <View style={styles.buttonContainer}>
    <CustomButton type="primary" content={"CUSTOM ORDER"} onPress={()=>{console.warn('Custom order was pressed')}}/>
    <CustomButton type="Secondary" content={"EXISTING INVENTORY"} onPress={()=>{console.warn('EXISTING INVENTORY was pressed')}}/>
    </View>
    </View>
    
    );
};

export default CarItem;