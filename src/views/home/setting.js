import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, StatusBar } from 'react-native'

class Setting extends Component {
  render () {
    return (pug`
      View(style=styles.body)
        Text this is setting
        View(style=styles.btn)
          Button(
            title="Go Back"
            onPress=() => this.props.navigation.goBack()
          )
    `)
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    marginTop: 50
  }
})

export default Setting
