import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const TabActive = ({label}) => {
  return (
    <View>
      <Icon 
        style={styles.icon}
        name={
          label == 'Inicio' ? 'home' 
          : label == 'Misterios'  ? 'book' 
          : 'infocirlceo'
        }
      />
      <Text style={ styles.focused }>
        {label}
      </Text>
      <View style={styles.bottomCircle}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    alignSelf:'center',
    color: "#0A0A0A",
  },
  focused: {
    color: "#0A0A0A",
    alignSelf:'center'
  },
  bottomCircle: {
    alignSelf: 'center',
    backgroundColor: '#CD3438',
    marginTop: 10,
    marginBottom: -15,
    width: 50,
    height: 20,
    borderRadius: 100,
  }
})

export default TabActive