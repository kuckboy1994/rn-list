import React, { Component } from 'react'

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    FlatList,
    Image
} from 'react-native'
// import Main from './demo';

import goldfinger from '../static/goldfinger.png'
import silverfinger from '../static/silverfinger.png'

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
            goldPoint: [
                
            ],
            refreshing: true,
            isLoading: true,
            hasMore: true,
            page: 1, 
            pageSize: 20,

            dataIndex: 0,
        }
    }

    componentDidMount () {
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
        console.log(item)
        let yang, yin, imagesource
        if (item['num'] >= 0) {
            yang = Math.round(item['num'])
            yin = 100 - yang
            imagesource = goldfinger
        } else {
            yin = -1 * Math.round(item['num'])
            yang = 100 - yin
            imagesource = silverfinger
        }
        return (
            <View style={[styles.tableHeader]} key={item['key']}>
                <Text style={styles.tableHeaderTd1}>{item['date']}</Text>
                <Text style={styles.tableHeaderTd2}>{yang}%</Text>
                <Text style={styles.tableHeaderTd3}>{yin}%</Text>
                <Text style={styles.tableHeaderTd4}><Image source={imagesource} style={styles.goldIcon}/></Text>
            </View>
        )
    }

    _refreshing () {
        this.requestData(1, this.state.pageSize, response => {
            const data = [];
            let dataIndex = 0;
            response.result.goldPoint.map((item) => {
                data.push({
                    key: dataIndex++,
                    date: item[0],
                    num: item[1]
                })
            })

            this.setState({
                goldPoint: data,
                dataIndex,
            })
        });
    }

    _onload() {
        this.requestData(this.state.page + 1, this.state.pageSize, response => {
            
            const data = this.state.goldPoint;
            let dataIndex = this.state.dataIndex;
            response.result.goldPoint.map((item) => {
                data.push({
                    key: dataIndex++,
                    date: item[0],
                    num: item[1]
                })
            })

            this.setState({
                dataIndex,
                page: this.state.page + 1,
                goldPoint: data
            })
        });
    }

    
        

    render () {
        return (
            <FlatList
                ItemSeparatorComponent={this._separator}
                data={this.state.goldPoint}
                renderItem={this._renderItem}
                onRefresh={this._refreshing.bind(this)}
                refreshing={false}
                onEndReachedThreshold={0}
                onEndReached={this._onload.bind(this)}
            />
        )
    }

    _separator = () => {
        return <View style={{ height: 1, backgroundColor: '#dddddd' }} />;
    }
}



const styles = StyleSheet.create({
    tableHeader: {
		height: 45,
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		paddingLeft: 15,
	},
	tableHeaderTd1: {
		flex: 25,
		textAlign: 'left',
		color: '#333333',
	},
	tableHeaderTd2: {
		flex: 17,
		textAlign: 'center',
        color: '#f44848',
        fontWeight: 'bold',
	},
	tableHeaderTd3: {
		flex: 17,
		textAlign: 'center',
        color: '#333333',
        fontWeight: 'bold',
	},
	tableHeaderTd4: {
		flex: 15,
		textAlign: 'center',
        color: '#555555',
    },
    goldIcon: {
        width: 17,
        height: 17,
        marginTop: 3,
    }
})

export default History