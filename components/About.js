import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderMC from './HeaderMC'

class About extends Component {
  render() {
    return (
        <View style={{ flex: 1}}>
            <HeaderMC/>
            <Text>About!</Text>
        </View>
    )
  }
}

export default About