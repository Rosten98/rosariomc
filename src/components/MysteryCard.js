import React from 'react'
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

function MysteryCard({ mystery }) {
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.textTitle}>{mystery.name}</Text>
                <Text style={styles.textSub}>Rezar en: {mystery.days}</Text>
            </View>
            <LinearGradient colors={['#003b97', '#05204A']} style={styles.btnGradient}>
                <TouchableOpacity
                style={styles.btn}
                onPress={() => Alert.alert(mystery.name)}
                >
                    <Text style={styles.btnText}>Rezar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

const styles = new StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        padding: 20,
    },
    textTitle: {
        color: "#363636",
        fontSize: 18,
        fontWeight: "bold",
    },
    textSub: {
        color: "#8b8b8b",
    }, 
    btnGradient: {
        borderRadius: 5,
    },
    btn: {
        padding: 15
    },
    btnText: {
        color: "#fff",
        textTransform: "capitalize",
        alignSelf: "center"
    },
    
})

export default MysteryCard