import React from 'react'
import {SafeAreaView, Image, Text, StyleSheet} from 'react-native'

const Heading = (props) => {
    return (
        <SafeAreaView style={styles.container}>
             <Image 
                style={styles.logo}
                source={require('../assets/img/logo.png')}/>
            <Text style={styles.textHeading}> {props.title} </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 10,
    },
    textHeading: {
        color: "#363636",
        marginVertical: 20, 
        fontSize: 22, 
        fontWeight: 'bold',
    },
    logo: {
        width: 40,
        height: 40,
    },
});

export default Heading;