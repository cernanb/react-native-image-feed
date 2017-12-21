import React from 'react'
import { Constants } from 'expo'
import { StyleSheet, Text, View } from 'react-native'

import AuthorRow from './components/AuthorRow'

export default class App extends React.Component {
  handle = () => {}

  render() {
    return (
      <View style={styles.container}>
        <AuthorRow
          fullName="Cernan Bernardo"
          linkText="Comments"
          onPressLinkText={this.handle}
        />
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
