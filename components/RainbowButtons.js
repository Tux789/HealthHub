
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import styles from '../style';

const Icon = () => {
    return <View style={styles.iconmain} >
         <Image
            style={styles.iconcool}
            resizeMode="contain"
            source={require('../assets/images/handicon.png')}
        />
    </View>
}



const RainbowButtons = props =>
<View style={styles.buttonCont}>
<View style={styles.button}>
<ActionButton radius={70} buttonColor="rgb(96, 113, 141)" btnOutRange="rgb(121, 137, 136)" icon={ <Icon/> } >

        <ActionButton.Item buttonColor='rgb(121, 137, 136)' title="Feed" onPress={props.feed}>
        <View style={styles.tinybutton}>

               <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/statusicon.png')}
                    />
        </View>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(96, 113, 141)' title="Friends" onPress={props.friends}>
       
            <Image
                    style={styles.iconsmall}
                    resizeMode="contain"
                    source={require('../assets/images/friends.png')}
                    />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(121, 137, 136)' title="User Activity" onPress={props.userActivity}>
            
            <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/userActivity.png')}
                    />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(96, 113, 141)' title="Track Activity" onPress={props.trackActivity}>
        
            <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/exerciseicon.png')}
                    />
        </ActionButton.Item>

</ActionButton>
</View>
</View>

export default RainbowButtons;
 