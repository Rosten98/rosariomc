import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function HeaderMC () {
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
        width: 50,
        height: 50,
    },
    nav: {
        backgroundColor: 'white',
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        padding: 7,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOpacity: 0.18,
        shadowRadius: 1.00,
        elevation: 2,
    }
});

export default HeaderMC;