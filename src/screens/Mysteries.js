import React, { Component } from 'react'
import { View, FlatList, StyleSheet, ImageBackground } from 'react-native'
import Heading from '../components/Heading'
import MysteryCard from '../components/MysteryCard'
import mysteries from '../assets/mysteries'
import LinearGradient from 'react-native-linear-gradient'


class Mysteries extends Component {
  constructor() {
    super()
    this.state = {
      mysteriesList: mysteries
    }
  }

  render() {
    return (
      // <ImageBackground source={require('../assets/img/flor.jpg')} style={styles.image}>
        <LinearGradient 
          colors={['#FFFFFF', '#D8E2B4']} 
          style={styles.gradient}
          start={{ x: 0, y: 0  }}
          end={{ x: 1, y: 1 }}>
          <Heading title="Misterios"/>
          <FlatList
            style={styles.list}
            keyExtractor={(item) => item.id.toString()}
            data={this.state.mysteriesList}
            renderItem={({ item }) => (
              <MysteryCard mystery={item}/>
            )}
          />        
        </LinearGradient>
      // </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  gradient: {
    flex: 1,
  },
  textHeading: {
    color: "#363636",
    marginTop: 20, 
    marginBottom: 10,
    fontSize: 22, 
    fontWeight: 'bold',
  }, 
  list: {
    marginBottom: 80,
    paddingHorizontal: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})

export default Mysteries