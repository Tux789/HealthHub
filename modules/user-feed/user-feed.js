import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup, Card, ListItem } from 'react-native-elements';
import NavButton from "../../components/NavButton";
import FormInput from "../../components/FormInput";

import apiUrl from '../../apiRoutes';

class UserFeed extends Component {
	
	state = {
		friends: [
			{ user: 'Tyler' },
			{ user: 'Jeff' },
			{ user: 'Crystal' },
			{ user: 'Jessica' },
			{ user: 'Ryan' }
		],
		goals: [
			{ goal: 'goal 1' },
			{ goal: 'goal 2'}
		]
	}

	const 

	render() {
		return (
			<View>
				<Button
				  raised
				  //icon={{name: 'cached'}}
				  title='BUTTON WITH ICON' />
			</View>
		);
	}
}

export default UserFeed;