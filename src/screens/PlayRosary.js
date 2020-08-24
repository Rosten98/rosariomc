import React, { Component } from 'react'
import { Text, View } from 'react-native'
import mysteries from '../assets/mysteries'

export default class PlayRosary extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true,
            todayMysteries: {},
        }
    }

    componentDidMount() {
        this.setState({ 
            isLoading: false,
            todayMysteries: mysteries[0]
         })
    }

    render() {
        return (
            <View>
                <Text> {this.state.todayMysteries.name} </Text>
                <Text> Is loading: {this.state.isLoading.toString()} </Text>
            </View>
        )
    }
}
