import React, { Component } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

class Home extends Component {
  render () {
    return (pug`
      View(style=styles.body)
        Text this is Home
        View(style=styles.btn)
          Button(
            title="Go Details"
            onPress=() => this.props.navigation.navigate('Detail', {text: 'get home message'})
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

export default Home
