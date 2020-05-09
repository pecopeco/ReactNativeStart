import React, { Component } from 'react'
import { StatusBar, StyleSheet, Button, View, Text } from 'react-native'
import { observer, inject } from 'mobx-react'
import { $http, easyTost, formatTime } from '../../mixin'

@inject(['userInfo'])
@observer
class Home extends Component {
  state = {
    defaultData: 'defaulData'
  }

  async componentDidMount () {
    easyTost('start http get')
    let res = await $http.get('/api/user', {id: 1})
    console.log(res)
  }

  render () {
    return (pug`
      View(style=styles.body)
        StatusBar(backgroundColor="#fff" barStyle="dark-content")
        Text page is Home
        Text(style=styles.text) the state is #{this.state.defaultData}
        Text(style=styles.text) the store is #{this.props.userInfo.username}
        Text(style=styles.text) the time is #{formatTime(1589004082463 / 1000, '-', '-', '', true, true)}
        View(style=styles.btn)
          Button(title="go detail" onPress=() => this.props.navigation.navigate('Detail', {text: 'this is home message'}))
    `)
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    marginTop: 20
  },
  btn: {
    marginTop: 50
  }
})

export default Home
