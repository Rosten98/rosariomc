import React from 'react'
import {View, Text, TouchableOpacity, Alert} from 'react-native'
import styles from '../styles'
import LinearGradient from 'react-native-linear-gradient'

function MysteryCard({ mystery }) {
    return(
        <View style={styles.card}>
            <View>
                <Text style={styles.txtTitle}>{mystery.name}</Text>
                <Text style={styles.txtSub}>Rezar en: {mystery.days}</Text>
            </View>
            <LinearGradient colors={['#003b97', '#05204A']} style={styles.btnGradient}>
                <TouchableOpacity
                onPress={() => Alert.alert(mystery.name)}
                >
                    <Text style={styles.btnText}>Rezar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    )
}

export default MysteryCard