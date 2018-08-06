import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import Accordian from '../accordian/accordian';
import { Font } from 'expo';
import styles from './style';
import TitleImage from "../../components/TitleImage";
import RainbowButtons from "../../components/RainbowButtons";


class FeedMaster extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.home}> 
                <View style={styles.imgContain}>
                    <Image
                    style={styles.imgStyle}
                    resizeMode="contain"
                    source={require('../../assets/images/healthHubLogo.png')}
                    />
                </View>
                    <Text style={styles.textTitle}>Feed Page MAN!!!!!!!!</Text>
                    <View>

                    </View>
                    <RainbowButtons />

                </View>
            </ScrollView>    
        );
    }
};

export default FeedMaster;