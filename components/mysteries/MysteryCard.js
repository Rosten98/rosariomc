import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native'
import styles from '../styles'

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

export default MysteryCard