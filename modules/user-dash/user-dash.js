import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import styles from './style';


//NOTE: Working on rendering Activity cards component from activity JS. Crystal is working on creating a form component, that we'll also need to render in this user-dash.js file.

//user-dash.js is the canvas for adding compoenents to the "Personal User Dashboard - View 2" in Balsamiq

class UserDash extends Component {
    state = {
        user: {
            firstname: "Jessica",
            goals: [
                'TRACK SLEEP',
                'STOP SMOKING'
            ]
        },
        activities: [ 
            // dummy data below. Let's assume the user tracked her sleep several times and her number of smokes per day once. On lines 30-37, we're going to iterate using map over the array and build in logic to only return--using filter--returning the number avgeragenhours of slept. Same things for the number of times smoked
            { goalType: 'TRACK SLEEP', avgHours: 3 },
            { goalType: 'TRACK SLEEP', avgHours: 3 },
            { goalType: 'TRACK SLEEP', avgHours: 6 },
            { goalType: 'TRACK SLEEP', avgHours: 8 },
            { goalType: 'TRACK SLEEP', avgHours: 2 },
            { goalType: 'TRACK SLEEP', avgHours: 9 },
            { goalType: 'TRACK SLEEP', avgHours: 10 },
            { goalType: 'TRACK SLEEP', avgHours: 8 },
            { goalType: 'TRACK SLEEP', avgHours: 8 },
            { goalType: 'STOP SMOKING', avgSmokesPerDay: 8 },
        ]
    }
    render() {
        return (
            <View style={styles.home}> 
                <Text> Sup! {this.state.user.firstname} </Text>
                {this.state.user.goals.map(goal => 
                    <ActivityCard 
                        type={goal}
                        activities={this.state.user.activities.filter(
                            (activity) => activity.goalType === goal
                        )}
                    />
                )}
            </View>
        );
    }
};

export default UserDash;