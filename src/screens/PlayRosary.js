import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import mysteries from '../assets/mysteries'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

export default class PlayRosary extends Component {
    
    state = {
        todayMysteries: {},
        play: false,
        start: true,
        mysteryId: 0,
    }
    

    componentDidMount() {
        let today = new Date()
        let day = today.getDay()
        let getMystery = null

        switch(day){
            case 1:
            case 6:
                getMystery = 0
                break;
            case 0:
            case 3:
                getMystery = 1
                break;
            case 2:
            case 5:
                getMystery = 2
                break;
            case 4:
                getMystery = 3
                break;
        }


        this.setState(prevState => {
            return (
                {
                    ...prevState,
                    todayMysteries: mysteries[getMystery]
                }
            )
        })
    }

    render() {
        const rosary = this.state.todayMysteries
        const getMystery = this.state.mysteryId
        console.log(rosary)
        return (
            <ImageBackground source={require('../assets/img/flor.jpg')} style={styles.image}>
                <View style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'rgba(36,36,36,0.1)'}}>
                    <LinearGradient 
                        colors={['rgba(54, 54, 54, 0)', 'rgba(54, 54, 54, .6)']} 
                        start={{ x: 0, y: 1 }}
                        end={{ x: 0, y: 0 }}> 
                        <TouchableOpacity style={styles.exit} onPress={() => this.props.navigation.navigate("Home")}>
                            <Icon name="logout" size={20} color="#E0E0E0"/>
                            <Text style={styles.txtControls}>Salir</Text>
                        </TouchableOpacity>
                    </LinearGradient>
                    
                    <View style={{marginBottom: 200, paddingHorizontal: 10}}>
                        <Text> { Array.isArray(rosary.mysteries) && rosary.mysteries.length && rosary.mysteries[getMystery] } </Text>
                        <Text> Misterios {rosary.name} </Text>
                        <Text>
                            {
                                getMystery === 0 ? 'Primer' :
                                getMystery === 1 ? 'Segundo' :
                                getMystery === 2 ? 'Tercer' :
                                getMystery === 3 ? 'Cuarto' : 'Quinto'
                            } misterio
                        </Text>
                    </View>

                    <LinearGradient 
                        colors={['rgba(54, 54, 54, 0)', 'rgba(54, 54, 54, .6)']} 
                        style={styles.controls}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}>  
                        <TouchableOpacity style={styles.controlBtn}>
                            <Icon name="left" size={24} color="#E0E0E0"/>
                            <Text style={styles.txtControls}>Anterior</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="play" color="#E0E0E0" size={54}/>
                        </TouchableOpacity>
                        {/* <TouchableOpacity>
                            <Icon name="pausecircle" color="#E0E0E0" size={48}/>
                        </TouchableOpacity> */}
                        
                        <TouchableOpacity style={styles.controlBtn}>
                            <Text style={styles.txtControls}>Siguiente</Text>
                            <Icon name="right" size={24} color="#E0E0E0"/>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>

                {/* <View>
                    <Text>Mostrar letanías</Text>
                </View> */}
            </ImageBackground>
        )
    }
}

const styles =  StyleSheet.create({
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    exit: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: "row",
    },
    controls: {
        paddingHorizontal: 10,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    controlBtn: {
        flexDirection: "row", 
        alignItems: "center",
    },
    txtControls: {
        color: "#E0E0E0",
        marginHorizontal: 10, 
    }
})