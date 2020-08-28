import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const TabInactive = ({label}) => {
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
      <Text style={ styles.unfocused }>
        {label}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    alignSelf:'center',
    color: "#8B8B8B",
  },
  unfocused: {
    color: "#8B8B8B",
    alignSelf: 'center',
  },
  bottomCircle: {
    alignSelf: 'center',
    backgroundColor: '#CD3438',
    marginTop: 10,
    marginBottom: -40,
    width: 50,
    height: 50,
    borderRadius: 100,
  }
})

export default TabInactive