import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native'
import Heading from '../components/Heading'
import OpenURLButton from '../components/OpenURLButton'
import Icon from 'react-native-vector-icons/Ionicons'


const milesSite = "https://www.mileschristi.org.mx/";
// const milesMail = "mailto:guadalupana@mileschristi.org";
const milesMail = "mailto:mediamileschristi@mileschristi.org";
// TODO: Change numbers
const milesPhone = "tel:+5213323327002"

class About extends Component {

  render() {
    return (
      <View style={styles.body}>
        <Heading title="Sobre Nosotros"/>
        <ScrollView>
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={require('../assets/img/banner.png')}
                resizeMode="contain"
              />
              <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh enim, consectetur vel augue in imperdiet.</Text>
              <OpenURLButton url={milesSite}>Visitar sitio web</OpenURLButton>
            </View>
            <View style={styles.container}>
              <Icon style={styles.icon} name="mail"/>
              <Text style={styles.text}>Envíanos un mensaje con tus inquietudes</Text>
              <OpenURLButton url={milesMail}>Enviar correo</OpenURLButton>
            </View>
            <View style={styles.container}>
              <Icon style={styles.icon} name="phone-portrait-sharp"/>
              <Text style={styles.text}>Si nos necesitas también puedes contactarnos por teléfono.</Text>
              <OpenURLButton url={milesPhone}>Llamar</OpenURLButton>
            </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  container: {
    margin: 10,
    elevation: 2,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20
    
  },
  textHeading: {
    color: "#363636",
    marginVertical: 20, 
    fontSize: 22, 
    fontWeight: 'bold',
  },
  image: {
      width: undefined,
      height: undefined,
      padding: 30,
      marginBottom: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 25
  }, 
  icon: {
    fontSize: 30,
    color: "#aaa",
    marginBottom: 10,
    alignSelf: "center"
  }
})
export default About