import React, { Component } from 'React';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import apiUrl from "../../apiRoutes";
import FriendCard from "../../components/FriendCard";
import RainbowButtons from "../../components/RainbowButtons";
import styles from '../../style';


class Friends extends Component {
	state= {
		friends: [],
		friendEmail: ''
	}

	componentWillMount() {
		fetch(`${apiUrl}/api/isauth`, {
        	method: 'GET',
        	headers: {
            	'Accept': 'application/json',
            	'Content-Type': 'application/json',
            },   
        })
        .then((results) =>{
        	if(results.status === 401){
            	this.props.navigation.navigate('Login');
          	}
        })
        .catch(function(error) {
        	console.log(error)
        })  
	}

	componentDidMount() {
		this.getFriends();
	}

	handleFriendEmail = (text) => {
    	this.setState({ friendEmail: text })
  	}

	getFriends = () => {
		fetch(`${apiUrl}/api/friends`, {
			method: 'GET',
        	headers: {
            	'Accept': 'application/json',
            	'Content-Type': 'application/json',
            },
		})
		.then((response) => response.json())	
    	.then((responsejson) => {
    		console.log(responsejson)
      		this.setState({ 
      			friends: responsejson,
      			friendEmail: ''
      		});
    	})
		.catch((error) => {
			console.log(error)
		});
	}

	addFriend = email => {
    	fetch(`${apiUrl}/api/friends`, {
    		method: 'PUT',
    		headers: {
        	'Accept': 'application/json',
        	'Content-Type': 'application/json',
      	},
      		body: JSON.stringify({
        	email: email,
        	})
      	})
    	.then((response) => {
    		console.log(response);
      		this.getFriends();
      	})
      	.catch((error) => {
      		console.log(error)
      	});
    	
	}

	render() {

		const style = StyleSheet.create({
	    	healthHubLogo: {
		        paddingTop: 0,
		        justifyContent: 'center',
		        alignItems: 'center'
	    	},
	    	input: {
	    		marginTop: 20
	    	},
	    	friendsHeaderView: {
	    		display: 'flex',
	    		justifyContent: 'center',
	    		alignItems: 'center',
	    		paddingBottom: 10,
	    		paddingTop: 10,
	    		borderWidth: 2,
	    		borderColor: '#60718d',
	    		borderRadius: 3,
	    		backgroundColor: '#60718d'
	    	},
	    	friendsHeader: {
	    		fontSize: 25,
	    		fontWeight: 'bold',
	    		color: 'white'
	    	},
	    	addFriendInput: {
	    		marginBottom: 90,
	    		borderTopWidth: 5,
	    		borderColor: '#60718d',
	    		borderRadius: 1,
	    		paddingTop:10
	    	}
	    })

		return (
			<KeyboardAvoidingView 
				behavior="padding"
				style={{ flex: 1, justifyContent: 'space-between'}}
			>
				<View style={styles.home}>
					<View style={{ justifyContent: 'flex-end', paddingBottom: 85 }}>
					<View style={style.healthHubLogo}>
		                <Image
		                    style={styles.imgStyle}
		                    resizeMode="contain"
		                    source={require('../../assets/images/healthHubLogo.png')}
		                />
		            </View>
		                <View style={style.friendsHeaderView}>
		                	<Text style={style.friendsHeader}>Friends</Text>
		                </View>
						<ScrollView style={{marginBottom: 20}}>
							{
							    this.state.friends.map((friend, i) => (
							    	<FriendCard
							    		key={i}
							    		title={friend.email}
							    	/>
							    ))
							}
						</ScrollView>
						<TextInput 
							style={styles.input}
						    underlineColorAndroid="transparent"
						    placeholder="Friend's Email"
						    placeholderTextColor="#60718d"
						    autoCapitalize="none"
						    value={this.state.friendEmail}
						    onChangeText={this.handleFriendEmail} 
						/>
						<View>
							<TouchableOpacity
							    style={styles.submitButton}
							    onPress={
							    	() => this.addFriend(this.state.friendEmail)
							    }
						    >
				            	<Text style={styles.submitButtonText}> Add New Friend </Text>
				        	</TouchableOpacity>
			        	</View>
		        	</View>
	        		<RainbowButtons
                    	feed={() => this.props.navigation.navigate('Home')}
                    	friends={() => this.props.navigation.navigate('Friends')}
                    	userActivity={() => this.props.navigation.navigate('UserDash')}
                    	trackActivity={() => this.props.navigation.navigate('ActivityInput')}
                	/>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

export default Friends;