import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Accordian from '../accordian/accordian';
import ActionButton from 'react-native-circular-action-menu';
import styles from './style';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.home}> 
                <Text> Home component </Text>
                <Accordian></Accordian>
                <View style={styles.button}>
                    <ActionButton buttonColor="rgba(231,76,60,1)">
                        <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                            <Text>A</Text>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => {}}>
                            <Text>B</Text>
                        </ActionButton.Item>
                        <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => {}}>
                            <Text>C</Text>
                        </ActionButton.Item>
                    </ActionButton>
                </View>
            </View>
        );
    }
};

export default HomeScreen;