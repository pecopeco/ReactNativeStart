import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, StatusBar } from 'react-native'

class Detail extends Component {
  state = {
  }
  
  render () {
    return (pug`
      View(style=styles.body)
        Text(style=styles.text) page is detail
        Text(style=styles.text) #{this.props.route.params.text}
        View(style=styles.btn)
          Button(title="go setting" onPress=() => this.props.navigation.navigate('Setting'))
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

export default Detail
