import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native'
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
      <ImageBackground source={require('../assets/img/flor.jpg')} style={styles.image}>
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
      </ImageBackground>
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
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})

export default Mysteries