import React, { Component } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native'

class Home extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <View style={{ marginTop: 50 }}>
          <Button
            title="Go Details"
            onPress={() => this.props.navigation.navigate('Detail', {text: 'anything you want here'})}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

export default Home
