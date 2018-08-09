import React, { component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import TitleImage from "../../components/TitleImage";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import styles from '../../style';
import apiUrl from '../../apiRoutes';
import RainbowButtons from "../../components/RainbowButtons";

class UserDash extends React.Component {
    state={
        userActivities: []
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
        fetch(`${apiUrl}/api/activities`, {
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
                userActivities: responsejson
            });
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    render() {
       return (
        <View style={styles.home}>
            <ScrollView style={styles.scrollView}>
                {
                    this.state.userActivities.map((activity) => (
                        <ActivityCard
                            key={activity._id}
                            title={activity.activityType}
                        />
                    ))
                }
                    
            </ScrollView>
            <RainbowButtons
                feed={() => this.props.navigation.navigate('Home')}
                friends={() => this.props.navigation.navigate('Friends')}
                userActivity={() => this.props.navigation.navigate('UserDash')}
                trackActivity={() => this.props.navigation.navigate('ActivityInput')}
            />
        </View>
       )
    }
}

export default UserDash;