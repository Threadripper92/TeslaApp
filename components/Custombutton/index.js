import React from 'react';
import {Text,View,Pressable} from 'react-native';
import styles from './styles';

const CustomButton= (props)=>{

    const {type,content,onPress} =props;

    const backgroundColor = type === 'primary' ? '#171A20CC' :'#FFFFFFA6';
    const color = type === 'primary' ? '#FFFFFF' : '#171A20';


    return(
        <View style={styles.container}>
        <Pressable 
        style={[styles.button, {backgroundColor : backgroundColor }]} 
        onPress={onPress}>
        <Text style={[styles.buttonText,{ color:color }]}>{content}</Text></Pressable>
        </View>
    );
};

export default CustomButton;
