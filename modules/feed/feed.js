import React, { component } from 'react';
import { Text, View, ScrollView, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import TitleImage from "../../components/TitleImage";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import styles from '../../style';
import apiUrl from '../../apiRoutes';
import RainbowButtons from "../../components/RainbowButtons";

class MasterFeed extends React.Component {
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
        fetch(`${apiUrl}/api/activities/5b6b86d25ad95a00141f0349`, {
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
        const style = StyleSheet.create({
            healthHubLogo: {
                paddingTop: 0,
                justifyContent: 'center',
                alignItems: 'center'
            },
            input: {
                marginTop: 20
            },
            userHeaderView: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 10,
                marginBottom: 15,
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
                    <ScrollView style={{marginBottom: 20}}>
                        <View style={style.healthHubLogo}>
                        <Image
                            style={styles.imgStyle}
                            resizeMode="contain"
                            source={require('../../assets/images/healthHubLogo.png')}
                        />
                        </View>
                        <View style={style.userHeaderView}>
                            <Text style={style.friendsHeader}>Feed</Text>
                        </View>
                            {
                                this.state.userActivities.map((activity) => (
                                    <ActivityCard
                                        key={activity.activity._id}
                                        commentKey={activity.activity._id}
                                        headerText={'newguy1'}
                                        subText={activity.activity.goalType}
                                        chartData={activity.chartData}
                                    />
                                ))
                            }
                        </ScrollView>
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
export default MasterFeed;