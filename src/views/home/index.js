import React, { Component } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject(['userInfo'])
@observer
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'start'
    }
  }

  render () {
    return (pug`
      View(style=styles.body)
        Text this is Home
        Text(style=styles.text) the state is #{this.state.name}
        Text(style=styles.text) the store is #{this.props.userInfo.username}
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
