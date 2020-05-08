import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'

class My extends Component {
  render () {
    return (pug`
      View(style=styles.body)
        Text this is my
    `)
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default My
