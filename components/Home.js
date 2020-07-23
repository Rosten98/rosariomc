import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import HeaderMC from './HeaderMC';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderMC/>
        <Text style={[styles.textHeader, styles.textCenter]} > El Santo Rosario </Text>
        <View style={styles.mainContent}> 
          <Text style={[styles.textCenter, styles.text]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget gravida facilisis aliquam dictum. Libero scelerisque leo id at quisque sit massa vestibulum. </Text> 
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Touch")}
            >
            <Text style={styles.btnText}>Rezar misterios del día</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textHeader: {
    color: "#363636",
    flex: 1, 
    fontSize: 25, 
    fontWeight: 'bold',
    margin: 0
  },
  textCenter: {
    textAlign: 'center', 
    textAlignVertical: 'center', 
  },
  text: {
    fontSize: 18,
    lineHeight: 30,
  },
  mainContent : {
    flex: 5,
    justifyContent: "space-around",
    padding: 20,
  },
  button : {
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#003B97",
    padding: 12,
  },
  btnText : {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 18,
  }
})

export default Home