import React from 'react'
import { Image } from 'react-native'

const Logo = (props) => {
  return (
    <Image
      source={require(`../Assets/logo.png`)}
      style={[styles, props.style]}
    />
  )
}

const styles = {
  height: 120,
  width: 120
}

export default Logo
