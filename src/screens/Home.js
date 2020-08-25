import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LinearGradient from 'react-native-linear-gradient'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Heading from '../components/Heading'
import Mysteries from './Mysteries';
import About from './About';

const BottomTab = createBottomTabNavigator();

class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('../assets/img/flor.jpg')} style={styles.image}>
        <View style={styles.body}>
          <Heading title="El Santo Rosario"/>
          <View style={styles.container}>
            <LinearGradient 
              colors={['#FFFFFF', '#D6E4B6']} 
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <Text style={[styles.text, styles.textTitle]}>Un mensaje de Miles Christi</Text>
              <Text style={[styles.text, styles.textContent]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget gravida facilisis aliquam dictum. Libero scelerisque leo id at quisque sit massa vestibulum. Consectetur adipiscing elit. Eget gravida facilisis aliquam dictum.</Text> 
            </LinearGradient>
          </View>
          <View style={styles.container}>
            <LinearGradient 
              colors={['#FFFFFF', '#D6E4B6']} 
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}>
              <Text style={[styles.text, styles.textTitle]}>Misterios de hoy</Text>
              <Text style={[styles.text, styles.textContent]}>Lorem ipsum dolor sit amet.</Text> 
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.props.navigation.navigate("PlayRosary")}
                >
                  <Text style={styles.btnTxt}>Rezar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const Home = ({navigation}) => {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Inicio') {
            iconName = 'home-sharp'
          } else if (route.name === 'Misterios') {
            iconName = 'bookmarks-sharp'
          } else if (route.name === 'Nosotros') {
            iconName = 'information-circle-outline'
          } else {
            iconName = 'home-sharp'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <BottomTab.Screen name="Inicio" component={HomeScreen}/>
      <BottomTab.Screen name="Misterios" component={Mysteries} />
      <BottomTab.Screen name="Nosotros" component={About} />

    </BottomTab.Navigator>
  )
}

const styles =  StyleSheet.create({
  body: {
    flex: 1,
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    // justifyContent: 'space-around',
  },
  text: {
    color: "#363636",
    fontSize: 18,
    lineHeight: 25,
    borderRadius: 5,
    margin: 5,
  },
  textTitle: {
    fontWeight: 'bold'
  },
  textContent: {
    fontSize: 16,
  },
  btn: {
    width: 100,
    backgroundColor: "#D33F49",
    borderRadius: 50,
    paddingVertical: 15,
    marginTop: 20,
    width: 140,
  }, 
  btnTxt: {
    color: "#fff",
    fontWeight: 'bold',
    textTransform: "capitalize",
    alignSelf: "center",
    fontSize: 16
  },
  gradient: {
    borderRadius: 5,
    marginVertical: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})

export default Home