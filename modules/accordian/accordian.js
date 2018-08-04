import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import { Font } from 'expo';
class Accordian extends Component {

    state = {
        expand: false,

    }



    expand() {
        if (this.state.expand) {
            this.setState({ expand: false });
        } else {
            this.setState({ expand: true });
        }
    }

    displayInfo() {
        let info = (
            <View style={styles.accordionplace}>
                <View>
                    <Text> Expanded info </Text>
                </View>
                <View>
                    <Text> Expanded info </Text>
                </View>
                <View>
                    <Text> Expanded info </Text>
                </View>
            </View>
        );

        if (this.state.expand) {
            return info;
        } else {
            return <View></View>;
        }
    }

    render() {
        return (   
            <View>     
                <View> 
                    <Text style={styles.accordionstyle} onPress={this.expand}> This is an accordion </Text> 
                </View>
                <View> {this.displayInfo()} </View>
            </View>
        );
    }
};

export default Accordian;