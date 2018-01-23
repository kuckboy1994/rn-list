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
	View
} from 'react-native';

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
				<View style={[styles.tableHeader, headerMarginTop]}>
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
	tableHeader: {
		height: 40,
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: 'black',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		overflow: 'hidden',
		paddingLeft: 20,
		paddingRight: 20,
	},
	tableHeaderTd1: {
		flex: 2,
		textAlign: 'left',
	},
	tableHeaderTd2: {
		flex: 1,
		textAlign: 'center',
	},
	tableHeaderTd3: {
		flex: 1,
		textAlign: 'center',
	},
	tableHeaderTd4: {
		flex: 1,
		textAlign: 'right',
	},

	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
