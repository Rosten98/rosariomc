import React, { Component } from 'react'
import { Text, View } from 'react-native'
import HeaderMC from './HeaderMC'
import mysteries from './mysteries'

class MysteriesList extends Component {
  constructor() {
    super()
    this.state = {
      mysteriesList: mysteries
    }
  }

  render() {
    const mysteriesComp = this.state.mysteriesList.map( mystery => {
      return <Text>{mystery.name} {mystery.days}</Text>
    })

    return (
        <View style={{ flex: 1 }}>
            <HeaderMC/>
            {mysteriesComp}
        </View>
    )
  }
}

export default MysteriesList