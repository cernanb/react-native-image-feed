import React from 'react'
import { Constants } from 'expo'
import { StyleSheet, Text, View } from 'react-native'

import Avatar from './components/Avatar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Avatar initials="CAB" size={35} backgroundColor={'orange'} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight
  }
})
