import * as React from 'react'
import { View, Text, Button, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider } from "mobx-react"
import store from './store'
import storage from './storage'

import Login from './views/login'
import Home from './views/home'
import My from './views/my'
import Detail from './views/home/detail'
import Setting from './views/home/setting'

storage.set('token', '123')   // 测试token

let StackNavigator = createStackNavigator().Navigator
let StackScreen = createStackNavigator().Screen
let TabNavigator = createBottomTabNavigator().Navigator
let TabScreen = createBottomTabNavigator().Screen

const HomeStackScreen = () => {
  return (pug`
    StackNavigator
      StackScreen(name="Home" component=Home options={headerShown: false, headerTitle: ''})
      StackScreen(name="Detail" component=Detail options={headerTitle: 'detail'})
      StackScreen(name="Setting" component=Setting options={headerTitle: 'setting'})
      StackScreen(name="Login" component=Login options={headerShown: false})
    `)
}

let token
storage.get('token').then((res) => {
  if (res) {
    token = res
    this && this.forceUpdate && this.forceUpdate()   // 第一次进APP取到token，重绘页面
  }
})

const App = () => {
  const Icon = (src) => {
    return (pug`
      Image(style={width: 25, height: 25} source=src)
    `)
  }
  return (pug`
    Provider(...store)
      NavigationContainer
        if token
          TabNavigator(
            screenOptions=({ route }) => ({ tabBarVisible: !route.state || route.state.index === 0 })
            tabBarOptions={ activeTintColor: '#00dbde', inactiveTintColor: 'gray' }
          )
            
            TabScreen(name="Home" component=HomeStackScreen options={
              tabBarLabel: 'Home',
              tabBarIcon: ({ focused }) => {
                return Icon(focused ? require('./assets/home-check.png') : require('./assets/home.png'))
              }
            })
            TabScreen(name="My" component=My options={
              tabBarLabel: 'My',
              tabBarIcon: ({focused}) => {
                return Icon(focused ? require('./assets/my-check.png') : require('./assets/my.png'))
              }
            })
        else
          StackNavigator
            StackScreen(name="Login" component=Login options={headerShown: false, headerTitle: 'login'})
  `)
}

export default App