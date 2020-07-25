import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import HeaderMC from './HeaderMC'
import OpenURLButton from './about/OpenURLButton'

const milesSite = "https://www.mileschristi.org.mx/";
// const milesMail = "mailto:guadalupana@mileschristi.org";
const milesMail = "mailto:mediamileschristi@mileschristi.org";
// TODO: Change numbers
const milesPhone = "tel:+5213323327002"

class About extends Component {

  render() {
    return (
        <View style={{ flex: 1}}>
            <HeaderMC/>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../assets/img/banner.png')}
                resizeMode="contain"
              />
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh enim, consectetur vel augue in imperdiet.</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => Alert.alert("Touch")}
              >
                <OpenURLButton url={milesSite}>Visitar sitio web</OpenURLButton>
              </TouchableOpacity>
            </View>
            <OpenURLButton url={milesMail}>Enviar correo</OpenURLButton>
            <OpenURLButton url={milesPhone}>Llamar</OpenURLButton>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    elevation: 2,
    margin: 20,
    padding: 20,
    borderRadius: 10
  },
  image: {
    width: undefined,
    height: undefined,
    padding: 30
  },
  text: {
    fontSize: 14,
    lineHeight: 25,
    marginTop: 10
  },
  button: {

  }
});

export default About