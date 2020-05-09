import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject(['userInfo'])
@observer
class My extends Component {
  state = {
  }

  render () {
    return (pug`
      View(style=styles.body)
        Text(style=styles.text) page is my
        Text(style=styles.text) the name is #{this.props.userInfo.username}
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
  }
})

export default My
