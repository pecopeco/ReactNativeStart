import React, { Component } from 'react'
import { StyleSheet, View, Text, StatusBar } from 'react-native'

class My extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>my</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

export default My
