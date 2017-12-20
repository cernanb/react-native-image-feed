import React from 'react'
import { View, Text, ColorPropType, StyleSheet } from 'react-native'
import { PropTypes } from 'prop-types'

export default function Avatar({ size, backgroundColor, initials }) {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor
  }

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{initials}</Text>
    </View>
  )
}

Avatar.proptypes = {
  initials: PropTypes.string.isRequired,
  backgroundColor: ColorPropType.isRequired,
  size: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white'
  }
})
