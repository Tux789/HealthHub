import React, { component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
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

	render() {
		return (
			<View>
			<Button>
				Foobar
			</Button>
			</View>
		);
	}
}