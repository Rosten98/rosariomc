import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import HeaderMC from '../HeaderMC'
import MysteryCard from './MysteryCard'
import mysteries from './mysteries'
import styles from '../styles'


class MysteriesList extends Component {
  constructor() {
    super()
    this.state = {
      mysteriesList: mysteries
    }
  }

  render() {
    // const mysteriesComp = this.state.mysteriesList.map( mystery => {
    //   return <Text key={mysteries.id}>{mystery.name} {mystery.days}</Text>
    // })

    return (
        <View >
            <HeaderMC/>
            <Text style={[styles.textHeader, styles.textCenter]} > Misterios </Text>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={this.state.mysteriesList}
              renderItem={({ item }) => (
                <MysteryCard mystery={item}/>
            )}
            />
        </View>
    )
  }
}

export default MysteriesList