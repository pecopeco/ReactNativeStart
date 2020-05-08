import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, StatusBar } from 'react-native'

class Detail extends Component {
  render () {
    return (pug`
      View(style=styles.body)
        Text this is detail
        Text #{this.props.route.params.text}
        View(style=styles.btn)
          Button(
            title="Go Setting"
            onPress=() => this.props.navigation.navigate('Setting')
          )
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

export default Detail
