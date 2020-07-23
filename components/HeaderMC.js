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
        // IOS specific
        shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'red',
        shadowOpacity: 1.0,
        elevation: 2,
    }
});

export default HeaderMC;