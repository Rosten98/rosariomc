import React, {useCallback} from 'react'
import {Linking, TouchableOpacity, Text, StyleSheet} from 'react-native'
import LinearGradient from 'react-native-linear-gradient' 

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
          style={styles.btn}
          onPress={handlePress}
        >
            <Text style={styles.btnTxt}>{children}</Text>
        </TouchableOpacity>
      </LinearGradient>
    )
};

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: "red",
    alignSelf: "stretch",
    paddingVertical : 12
  }, 
  btnGradient: {
    borderRadius: 5,
    marginVertical: 20,
  },
  btnTxt: {
    color: "#fff",
    fontWeight: 'bold',
    textTransform: "capitalize",
    alignSelf: "center"
  },
})
export default OpenURLButton