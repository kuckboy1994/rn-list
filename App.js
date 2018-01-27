/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Image,
} from 'react-native';

import backIcon from './app/static/back.png'

import HistoryPage from './app/history/index'
// import HistoryPage from './app/history/demo'

export default class App extends Component<{}> {
	render() {
		let headerMarginTop = {}
		if (Platform.OS === 'ios') {
			headerMarginTop = {
				marginTop: 20,
			}
		}
		return (
			<View style={{ flex: 1 }}>
				<View style={[styles.optionbar, headerMarginTop]}>
					<Text style={styles.pagetitle}>点金历史</Text>
					{/* <Text >《</Text> */}
					<Image source={backIcon} style={styles.back}/>
				</View>
				<View style={[styles.tableHeader]}>
					<Text style={styles.tableHeaderTd1}>日期</Text>
					<Text style={styles.tableHeaderTd2}>阳普</Text>
					<Text style={styles.tableHeaderTd3}>阴普</Text>
					<Text style={styles.tableHeaderTd4}>点金</Text>
				</View>
				<HistoryPage/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	optionbar: {
		backgroundColor: '#383838',
		height: 44,
		justifyContent: 'center',
		alignItems: 'center',
	},
	pagetitle: {
		fontSize: 16,
		color: '#fff',
		// textAlign: 'center'
	},
	back: {
		position: 'absolute',
		top: 13,
		left: 13,
		width: 20,
		height: 20,
	},
	tableHeader: {
		height: 35,
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: '#dddddd',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		overflow: 'hidden',
		paddingLeft: 15,
	},
	tableHeaderTd1: {
		flex: 25,
		textAlign: 'left',
		color: '#555555',
	},
	tableHeaderTd2: {
		flex: 17,
		textAlign: 'center',
		color: '#555555',
	},
	tableHeaderTd3: {
		flex: 17,
		textAlign: 'center',
		color: '#555555',
	},
	tableHeaderTd4: {
		flex: 15,
		textAlign: 'center',
		color: '#555555',
	},

	// container: {
	// 	flex: 1,
	// 	justifyContent: 'center',
	// 	alignItems: 'center',
	// 	backgroundColor: '#F5FCFF',
	// },
	// welcome: {
	// 	fontSize: 20,
	// 	textAlign: 'center',
	// 	margin: 10,
	// },
	// instructions: {
	// 	textAlign: 'center',
	// 	color: '#333333',
	// 	marginBottom: 5,
	// },
});
