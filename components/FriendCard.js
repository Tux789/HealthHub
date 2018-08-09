import React from 'React';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Style = StyleSheet.create({
	card: {
		margin: 0,
		backgroundColor: 'white',
		padding: 15,
		borderStyle: 'solid',
		borderBottomWidth: .5,
		borderColor: '#60718d'
	}
})

const FriendCard = props => {
	return (
		<View style={Style.card}>
			<Text>{props.title}</Text>
		</View>
	);
};


export default FriendCard;