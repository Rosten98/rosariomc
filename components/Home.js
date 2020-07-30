import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import HeaderMC from './HeaderMC';
import LinearGradient from 'react-native-linear-gradient'

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderMC/>
        <Text style={[styles.textHeader, styles.textCenter]} > El Santo Rosario </Text>
        <View style={styles.mainContent}> 
          <Text style={[styles.textCenter, styles.text]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget gravida facilisis aliquam dictum. Libero scelerisque leo id at quisque sit massa vestibulum. </Text> 
          <LinearGradient colors={['#003b97', '#05204A']} style={styles.btnGradient}>
            <TouchableOpacity
              onPress={() => Alert.alert("Touch")}
              >
                <Text style={styles.btnText}>Rezar misterios del día</Text>
            </TouchableOpacity>
          </LinearGradient>
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
  },
  textCenter: {
    textAlign: 'center', 
    textAlignVertical: 'center', 
  },
  text: {
    fontSize: 18,
    lineHeight: 30
  },
  mainContent : {
    flex: 5,
    justifyContent: "space-around",
    padding: 10,
  },
  btnText : {
    color: "#fff",
    fontSize: 16,
  },
  btnGradient: {
    alignItems: "center",
    padding: 12,
    borderRadius: 5
  }
})

export default Home