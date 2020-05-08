import * as React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import store from './store'
import { Provider } from "mobx-react"

import Home from './views/home'
import My from './views/my'
import Detail from './views/home/detail'
import Setting from './views/home/setting'

function HomeScreen ({ route, navigation }) {
  return (<Home navigation={navigation} route={route}></Home>)
}

function DetailScreen ({ route, navigation }) {
  return (<Detail navigation={navigation} route={route}></Detail>)
}

function SettingScreen ({ route, navigation }) {
  return (<Setting navigation={navigation} route={route}></Setting>)
}

const HomeStack = createStackNavigator()
function HomeStackScreen () {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
      <HomeStack.Screen name="Setting" component={SettingScreen} />
    </HomeStack.Navigator>
  )
}

function MyScreen ({ route, navigation }) {
  return (<My navigation={navigation} route={route}></My>)
}

const Tab = createBottomTabNavigator()

function App () {
  return (
    <Provider {...store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let img
              if (route.name === 'Home') {
                img = focused ? require('./assets/home-check.png') : require('./assets/home.png')
              } else if (route.name === 'My') {
                img = focused ? require('./assets/my-check.png') : require('./assets/my.png')
              }
              return <Image style={{width: 25, height: 25}} source={img} />
            },
            tabBarVisible: !route.state || route.state.index === 0
          })}
          tabBarOptions={{
            activeTintColor: '#00dbde',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="My" component={MyScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App