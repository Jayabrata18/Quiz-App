import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from './screens/Home';
import Result from "./screens/Result";
import Quiz from './screens/Quiz';
import MyStack from "./navigation";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    
      <NavigationContainer>
        <MyStack/>

      </NavigationContainer>
      // {/* <Home/> */}
      // {/* <Quiz/> */}
      // {/* <Result/> */}
    
  )
}

export default App
const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
  }
})