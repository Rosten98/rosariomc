import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import HeaderMC from '../HeaderMC'
import MysteryCard from './MysteryCard'
import mysteries from './mysteries'


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
        <View style={{ flex: 1, backgroundColor: '#222' }}>
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

const styles = StyleSheet.create({
  textHeader: {
    color: "#555",
    marginVertical: 20, 
    fontSize: 22, 
    fontWeight: 'bold',
    margin: 0
  },
  textCenter: {
    marginLeft: 20, 
    textAlignVertical: 'center', 
  },
})

export default MysteriesList