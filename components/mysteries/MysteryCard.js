import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'

function MysteryCard({ mystery }) {
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.txtTitle}>{mystery.name}</Text>
                <Text style={styles.txtSub}>Rezar en: {mystery.days}</Text>
            </View>
            <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert(mystery.name)}
            >
                <Text style={styles.btnText}>Rezar</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#363636",
        borderRadius: 10,
        elevation: 2,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    txtTitle: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    txtSub: {
        color: "#8b8b8b",
    },  
    button : {
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "#003B97",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    btnText: {
        color: "#fff",
        fontSize: 14,
    }
})

export default MysteryCard