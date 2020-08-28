import React from 'react'
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function MysteryCard({ mystery }) {
    return(
        <LinearGradient 
              colors={['#FFFFFF', '#D6E4B6']} 
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}>  
            <View>
                <Text style={styles.textTitle}>{mystery.name}</Text>
                <Text style={styles.textSub}>Rezar en: {mystery.days}</Text>
            </View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => Alert.alert(mystery.name)}
            >
                <Text style={styles.btnTxt}>Rezar</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

const styles = new StyleSheet.create({
    textTitle: {
        color: "#363636",
        fontSize: 18,
        fontWeight: "bold",
    },
    textSub: {
        color: "#8b8b8b",
        fontSize: 16,
        marginTop: 10
    }, 
    btn: {
        width: 100,
        backgroundColor: "#D33F49",
        borderRadius: 50,
        paddingVertical: 10,
        marginTop: 20,
        width: 130,
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
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 20,
        elevation: 1
    },
})

export default MysteryCard