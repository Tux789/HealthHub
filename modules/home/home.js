import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Accordian from '../accordian/accordian';
import { Font } from 'expo';
import styles from './style';
import TitleImage from "../../components/TitleImage";
import RainbowButtons from "../../components/RainbowButtons";


class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.home}>
                <ScrollView>
                    <View style={styles.home}> 
                        <View style={styles.imgContain}>
                            <Image
                            style={styles.imgStyle}
                            resizeMode="contain"
                            source={require('../../assets/images/healthHubLogo.png')}
                            />
                        </View>
                        <Text style={styles.textTitle}> Home component </Text>
                        <View>
                            <Accordian></Accordian>
                        </View>
                    </View>
                </ScrollView>
                <RainbowButtons></RainbowButtons>
            </View>    
        );
    }
};

export default HomeScreen;