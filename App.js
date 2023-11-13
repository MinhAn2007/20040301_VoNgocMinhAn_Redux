import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import Counter from './redux/counter';
export default function App() {
  return(
 <Provider store={store}>
    <Counter></Counter>
 </Provider>)
}


