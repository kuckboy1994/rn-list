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
            listData: [
                { key: 'a' }, 
                { key: 'b' },
                { key: 'c' },
                { key: 'd' },
                { key: 'e' },
                { key: 'f' },
                { key: 'g' },
            ],
            refreshing: true,
            isLoading: true,
            hasMore: true,
            page: 1, 
            pageSize: 20,
        }
    }

    componentDidMount () {
        this.requestData(this.state.page, this.state.pageSize, response => {
            this.setState({
                goldPoint: response.result.goldPoint
            }, () => {
                console.log(this.state)
            })
        });
    }

    requestData (page, pageSize, callback) {
        setTimeout(() => {
            const data = {
                "errorcode": 0, 
                "errormsg": "", 
                "result": { 
                    "goldPoint": [
                        ["2017-10-23", -52.31], 
                        ["2017-10-20", -81.6], 
                        ["2017-10-19", -86.98], 
                        ["2017-10-18", -85.72], 
                        ["2017-10-17", -85.76], 
                        ["2017-10-16", -72.12], 
                        ["2017-10-13", 58.93], 
                        ["2017-10-12", 70.05], 
                        ["2017-10-11", 85.53], 
                        ["2017-10-10", 91], 
                        ["2017-10-09", 82.24], 
                        ["2017-09-29", -50.41], 
                        ["2017-09-28", -68.16], 
                        ["2017-09-27", -79.47], 
                        ["2017-09-26", -86.95], 
                        ["2017-09-25", -82.49], 
                        ["2017-09-22", -75.19], 
                        ["2017-09-21", -55.44], 
                        ["2017-09-20", -50.27], 
                        ["2017-09-19", -55.48]
                    ], 
                    "count": 683, 
                }
            };

            callback(data)
        }, 1000);
    }

    _renderItem ({item}) {
        return (
            <Text>{item.key}</Text>
        )
    }

    _refreshing () {
        let timer = setTimeout(() => {
            clearTimeout(timer)
            alert('刷新成功')
        }, 1500)
    }
        

    render () {
        return (
            <FlatList
                data={this.state.listData}
                renderItem={this._renderItem}
                onRefresh={this._refreshing}
                refreshing={false}
            />
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