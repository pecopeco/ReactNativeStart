import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, StatusBar } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject(['userInfo'])
@observer
class Setting extends Component {
  state = {
  }
  
  render () {
    return (pug`
      View(style=styles.body)
        Text(style=styles.text) page is setting
        Text(style=styles.text) the name is #{this.props.userInfo.username}
        View(style=styles.btn)
          Button(title="update userinfo" onPress=() => this.props.userInfo.getUserInfo('li'))
        View(style=styles.btn)
          Button(title="go back" onPress=() => this.props.navigation.goBack())
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

export default Setting
