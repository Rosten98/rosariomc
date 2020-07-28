import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import HeaderMC from './HeaderMC'
import OpenURLButton from './about/OpenURLButton'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'


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
        <ScrollView style={{marginTop: 10}}>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../assets/img/banner.png')}
                resizeMode="contain"
              />
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh enim, consectetur vel augue in imperdiet.</Text>
              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => Alert.alert("Touch")}
              >
                <OpenURLButton url={milesSite}>Visitar sitio web</OpenURLButton>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.row}>
                <Icon style={styles.icon} name="mail"/>
                <Text style={styles.text}>Envíanos un mensaje con tus inquietudes</Text>
              </View>
              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => Alert.alert("Touch")}
              >
                <OpenURLButton url={milesMail}>Enviar correo</OpenURLButton>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.row}>
                <Icon style={styles.icon} name="phone-portrait-sharp"/>
                <Text style={styles.text}>Si nos necesitas también puedes contactarnos por teléfono.</Text>
              </View>
              <TouchableOpacity
                style={{marginTop: 20}}
                onPress={() => Alert.alert("Touch")}
              >
                <OpenURLButton url={milesPhone}>Llamar</OpenURLButton>
              </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    )
  }
}

export default About