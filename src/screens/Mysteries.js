import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import Heading from '../components/Heading'
import MysteryCard from '../components/MysteryCard'
import mysteries from '../assets/mysteries'


class Mysteries extends Component {
  constructor() {
    super()
    this.state = {
      mysteriesList: mysteries
    }
  }

  render() {
    return (
        <View style={styles.body}>
            <Heading title="Misterios"/>
            <FlatList
              style={styles.list}
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
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textHeading: {
    color: "#363636",
    marginTop: 20, 
    marginBottom: 10,
    fontSize: 22, 
    fontWeight: 'bold',
  }, 
  list: {
    // backgroundColor: 'red',
    // paddingVertical: 100
  }
})

export default Mysteries