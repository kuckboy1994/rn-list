import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList
} from 'react-native'

const width = Dimensions.get('window').width

class History extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }

    render () {
        return (
            <View>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    tableHeader: {
        color: '#fff',
        fontSize: 14,
        textAlign: 'center',
    },

    tableTd: {
        textAlign: 'center',
        fontSize: 14
    }
})

export default History