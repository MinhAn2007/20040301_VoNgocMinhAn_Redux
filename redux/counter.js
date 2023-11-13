import React from 'react'
import { useState } from 'react';
import {StyleSheet, View,Pressable,Text } from 'react-native'
import { store } from './store';

const counter = () => {
    const [counts ,setCounts] = useState(0);

    const onIncrement = ()=>{
        store.dispatch({type :'INCREMENT'});
        setCounts(store.getState().count)
        console.log(store.getState());
      }
      const onDecrement = ()=>{
        store.dispatch({type :'DECREMENT'});
        setCounts(store.getState().count)
        console.log(store.getState().count);
    
      }
    
      return (
        <View style={styles.container}>
          <Pressable onPress={onIncrement} style={{backgroundColor:'pink'}}><Text>INCREMENT</Text></Pressable>
          <Text>{counts}</Text>
          <Pressable onPress={onDecrement} style={{backgroundColor:'pink'}}><Text>DECREMENT</Text></Pressable>
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
export default counter
