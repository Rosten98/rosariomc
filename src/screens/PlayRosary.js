import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import mysteries from '../assets/mysteries'
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'

export default class PlayRosary extends Component {
    
    state = {
        todayMysteries: {},
        maxMysteries: 5,
        duration: 5, //segundos
        play: false,
        start: true,
        time: 0,
        mysteryId: 0,
        letanies: false,
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

    componentWillUnmount() {
        this.stop()
    }

    togglePlay = () => {
        this.setState(prevState => ({
            ...prevState,
            play: !prevState.play
        }))
    }

    playMystery = () => {
        this.timer = setInterval(
            () => this.tick(),
            1000
        )
    }

    tick = () => {   
        if(this.state.time < this.state.duration){ 
            this.setState( prevState => ({
                ...prevState,
                time: prevState.time + 1,
            })) 
        } else {
            this.nextMystery() 
        }  
    }

    stop = () => {
        clearInterval(this.timer);
    }

    previousMystery = () => {
        this.stop()
        this.setState( prevState => ({
            ...prevState,
            play: false,
            start: true,
            time: 0,
            mysteryId: prevState.mysteryId - 1,
        }))
    }

    nextMystery = () => {
        this.stop()
        this.setState( prevState => ({
            ...prevState,
            play: false,
            start: true,
            time: 0,
            mysteryId: prevState.mysteryId + 1,
        }))
        if(this.state.mysteryId === 5){
            this.setState(prevState => ({
                ...prevState,
                letanies: prevState.letanies
            }))
        }
    }

    render() {
        const rosary = this.state.todayMysteries
        const getMystery = this.state.mysteryId
        return (
            <ImageBackground source={require('../assets/img/flor.jpg')} style={styles.image}>
                {
                    Array.isArray(rosary.mysteries) && rosary.mysteries.length && rosary.mysteries[getMystery] !== 'LETANIAS' ? 
                    <View style={{flex: 1, justifyContent: 'space-between', backgroundColor: 'rgba(0,0,0,0.4)'}}>
                        <LinearGradient 
                            colors={['rgba(54, 54, 54, 0)', 'rgba(54, 54, 54, .6)']} 
                            start={{ x: 0, y: 1 }}
                            end={{ x: 0, y: 0 }}> 
                            <TouchableOpacity style={styles.exit} onPress={() => this.props.navigation.navigate("Home")}>
                                <Icon name="logout" size={20} color="#E0E0E0"/>
                                <Text style={styles.txtControls}>Salir</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        
                        <View style={{marginBottom: 0, paddingHorizontal: 10}}>
                            <Text style={styles.mysteries}> Misterios {rosary.name} </Text>
                            <Text style={styles.subtitle}>
                                {
                                    getMystery === 0 ? 'Primer' :
                                    getMystery === 1 ? 'Segundo' :
                                    getMystery === 2 ? 'Tercer' :
                                    getMystery === 3 ? 'Cuarto' : 'Quinto'
                                } misterio
                            </Text>
                            <Text style={styles.title}>{ rosary.mysteries[getMystery] } </Text>
                        </View>

                        <LinearGradient 
                            colors={['rgba(54, 54, 54, 0)', 'rgba(54, 54, 54, .6)']} 
                            style={styles.controls}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 0, y: 1 }}> 
                            <Text>{this.state.time}</Text>
                            {
                                getMystery !== 0 ?
                                <TouchableOpacity style={styles.controlBtn} onPress={() => this.previousMystery()}>
                                    <Icon name="left" size={22} color="#E0E0E0"/>
                                    <Text style={styles.txtControls}>Anterior</Text>
                                </TouchableOpacity>
                                :
                                <View style={{opacity: .2, flexDirection: 'row'}}>
                                    <Icon name="left" size={22} color="#E0E0E0"/>
                                    <Text style={styles.txtControls}>Anterior</Text>
                                </View>
                            } 
                            {
                                this.state.play === false ?
                                <TouchableOpacity onPress={() => {
                                        this.togglePlay()
                                        this.playMystery()
                                    }}>
                                    <Icon name="play" color="#E0E0E0" size={48}/>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={() => {
                                    this.togglePlay()
                                    this.stop()
                                }}>
                                    <Icon name="pausecircle" color="#E0E0E0" size={48}/>
                                </TouchableOpacity>
                            }
                            
                            <TouchableOpacity style={styles.controlBtn} onPress={() => this.nextMystery()}>
                                <Text style={styles.txtControls}>Siguiente</Text>
                                <Icon name="right" size={22} color="#E0E0E0"/>
                            </TouchableOpacity>
                        </LinearGradient>
                    </View>
                    :
                    <View>
                        <Text>Mostrar letanías</Text>
                    </View> 
                }

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
        justifyContent: "center",
    },
    txtControls: {
        color: "#E0E0E0",
        marginHorizontal: 10, 
    },
    title: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 32
    },
    subtitle: {
        marginBottom: 20,
        color: "#ddd",
        fontWeight: 'bold',
        fontSize: 20
    },
    mysteries: {
        color: "#ddd",
        fontSize: 16
    }
})