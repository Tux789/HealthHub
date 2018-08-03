import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
class Accordian extends Component {
    constructor() {
        super();
        this.state = {
            expand: false
        };
        this.expand = this.expand.bind(this);
    }

    expand() {
        if(this.state.expand) {
            this.setState({expand: false});
        } else {
            this.setState({expand: true});
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

        if(this.state.expand) {
            return info;
        } else {
            return <View></View>;
        }
    }

    render() {
        return (   
            <View>     
                <View> 
                    <Text onPress={this.expand}> This is an accordion </Text> 
                </View>
                <View> { this.displayInfo() } </View> 
            </View>
        );
    }
};

export default Accordian;