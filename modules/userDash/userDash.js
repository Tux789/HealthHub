import React, { component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import TitleImage from "../../components/TitleImage";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import styles from '../../style';
import apiUrl from '../../apiRoutes';
import RainbowButtons from "../../components/RainbowButtons";

class UserDash extends React.Component {
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

    render() {
       return (
        <View style={styles.home}>
            <ScrollView style={styles.scrollView}>
                <View > 
                    <View style={styles.imgContain2}>
                        <TitleImage />  
                    </View>
                    <View style={styles.AcardStyle}> 
                        <ActivityCard />
                    </View>
                    <View style={styles.AcardStyle2}> 
                        <ActivityCard />  
                    </View>      
                </View>    
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