import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function Navigation () {
    return (
        <View style={styles.nav}>
          <Image 
          style={styles.logo}
          source={require('../assets/img/logo.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 58,
        height: 58,
    },
    nav: {
        backgroundColor: 'white',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        padding: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 3,
    }
});

export default Navigation;