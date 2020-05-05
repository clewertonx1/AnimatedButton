import React from 'react';
import {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default function App() {

  const [open, setOpen] = useState(false)
  const [width, setWidth] = useState(new Animated.Value(40))
 
  useEffect(() => {
    console.log(open)
    if(open){
      Animated.timing(
        width,{
          toValue: 100,
          duration: 1000,
        }
      ).start()
    }else{
      Animated.timing(
        width,{
          toValue: 40,
          duration: 1000,
        }
      ).start()
    }
  },[open])
  return (
    <View style={styles.container}>      
      <TouchableOpacity onPress={() => setOpen(!open)} >
        <Animated.View style={[styles.button, {width: width, height: 40, borderRadius: 50,}]}></Animated.View>
      </TouchableOpacity>
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
  button:{
    backgroundColor: '#53f45b'
  }
});
