/**
 * @format
 */

import React from 'react';
import { AppRegistry, Image, View } from 'react-native';
import { name as appName } from './app.json';
import Screen1 from './src/screen1'
import Screen2 from './src/screen2'
import Screen3 from './src/screen3'
import Screen4 from './src/screen4'
import Screen5 from './src/screen5'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

AppRegistry.registerComponent(appName, () => App);
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Screen1} options={{
        headerShown: false, tabBarIcon: ({ focused, color, size }) => {
          if (focused)
            return (
              <Image source={require('./src/image/home_select.png')} />
            )
          else return (
            <Image source={require('./src/image/home.png')} />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      }} />
      <Tab.Screen name="Data" component={Screen2} options={{
        headerShown: false, tabBarIcon: ({ focused, color, size }) => {
          if (focused)
            return (
              <Image source={require('./src/image/data_select.png')} />
            )
          else return (
            <Image source={require('./src/image/data.png')} />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      }} />
      <Tab.Screen name="Add" component={Screen3} options={{
        headerShown: false, tabBarIcon: ({ focused, color, size }) => {
          if (focused)
            return (
              <Image source={require('./src/image/add_select.png')} />
            )
          else return (
            <Image source={require('./src/image/add.png')} />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      }} />
      <Tab.Screen name="Message" component={Screen4} options={{
        headerShown: false, tabBarIcon: ({ focused, color, size }) => {
          if (focused)
            return (
              <Image source={require('./src/image/message_select.png')} />
            )
          else return (
            <Image source={require('./src/image/message.png')} />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      }} />
      <Tab.Screen name="User" component={Screen5} options={{
        headerShown: false, tabBarIcon: ({ focused, color, size }) => {
          if (focused)
            return (
              <Image source={require('./src/image/user.png')} />
            )
          else return (
            <Image source={require('./src/image/icon5.png')} />
          )
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray'
      }} />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home'
          component={MyTabs}
          options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;