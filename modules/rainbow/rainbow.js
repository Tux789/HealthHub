import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';

class RainbowButton extends Component {
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
            <View style={styles.subButtonView}>

                    <Text style={styles.subButton1}> A </Text>
                    <Text style={styles.subButton2}> A </Text>
                    <Text style={styles.buttonText} onPress={this.expand}> Rainbow Button </Text>
                    <Text style={styles.subButton3}> A </Text>
                    <Text style={styles.subButton4}> A </Text>

            </View>
        );

        if(this.state.expand) {
            return info;
        } else {
            return <Text style={styles.buttonText} onPress={this.expand}> Rainbow Button </Text>;
        }
    }

    render() {
        return (
            <View style={styles.button}> 
                <View> { this.displayInfo() } </View> 
            </View>
        );
    }
};

export default RainbowButton;