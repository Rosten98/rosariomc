import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import mysteries from '../assets/mysteries'

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
})