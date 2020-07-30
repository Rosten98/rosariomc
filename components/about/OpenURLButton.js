import React, {useCallback} from 'react'
import {Linking, TouchableOpacity, Text} from 'react-native'
import LinearGradient from 'react-native-linear-gradient' 
import styles from '../styles'
const OpenURLButton = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Hubo un error al intentar abrir ${url} por favor intente más tarde`);
      }
    }, [url]);
  
    // return <Button title={children} onPress={handlePress} />;
    return ( 
      <LinearGradient colors={['#003b97', '#05204A']} style={styles.btnGradient}>
        <TouchableOpacity
        onPress={handlePress}
        >
            <Text style={styles.btnText}>{children}</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
};

export default OpenURLButton