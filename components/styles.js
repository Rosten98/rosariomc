import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
    body: {
        backgroundColor: "#fff",
        flex: 1
    },
    container: {
        backgroundColor: "#fff",
        elevation: 2,
        margin: 10,
        padding: 20,
        borderRadius: 10
    },
    image: {
        width: undefined,
        height: undefined,
        padding: 30
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
});

export default styles;