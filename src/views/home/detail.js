import React, { Component } from 'react'
import { StyleSheet, Button, View, Text, StatusBar } from 'react-native'

class Detail extends Component {
  render () {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>detail</Text>
            <Text style={styles.sectionTitle}>{this.props.route.params.text}</Text>
            <View style={{ marginTop: 50 }}>
              <Button
                title="Go Setting"
                onPress={() => this.props.navigation.navigate('Setting')}
              />
            </View>
            <View style={{ marginTop: 50 }}>
              <Button
                title="Go Back"
                onPress={() => this.props.navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
})

export default Detail
