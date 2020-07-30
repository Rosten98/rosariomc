import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        flex: 1
    },
    container: {
        backgroundColor: "#fff",
        margin: 10,
        padding: 20,
        borderRadius: 10
    },
    image: {
        width: undefined,
        height: undefined,
        padding: 30,
        marginBottom: 10,
    },
    text: {
        fontSize: 14,
        lineHeight: 25,
    },
    icon: {
        fontSize: 30,
        color: "#aaa",
        marginBottom: 10,
        alignSelf: "center"
    },
    card: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        padding: 20,
    },
    txtTitle: {
        color: "#363636",
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
        paddingHorizontal: 12,
    },
    btnText: {
        color: "#fff",
        fontSize: 14,
        textTransform: "capitalize"
    },
    btnGradient: {
      alignItems: "center",
      padding: 12,
      paddingHorizontal: 20,
      borderRadius: 5
    }, 
    textHeader: {
        color: "#555",
        marginVertical: 20, 
        fontSize: 22, 
        fontWeight: 'bold',
    },
    textCenter: {
        marginLeft: 10, 
        textAlignVertical: 'center', 
    },
});

export default styles;