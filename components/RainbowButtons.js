
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
<ActionButton buttonColor="rgb(96, 113, 141)" btnOutRange="rgb(121, 137, 136)" icon={ <Icon/> } radius="70" >

        <ActionButton.Item buttonColor='rgb(121, 137, 136)' title="New Task" onPress={() => console.log("notes tapped!")}>
        <View style={styles.tinybutton}>
            {/* <Text style={styles.flytext}> Status</Text> */}
               <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/statusicon.png')}
                    />
        </View>
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(96, 113, 141)' title="Notifications" onPress={() => {}}>
            {/* <Text>B</Text> */}
            <Image
                    style={styles.iconsmall}
                    resizeMode="contain"
                    source={require('../assets/images/watericon.png')}
                    />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(121, 137, 136)' title="All Tasks" onPress={() => {}}>
            {/* <Text>C</Text> */}
            <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/foodicon.png')}
                    />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(96, 113, 141)' title="All Tasks" onPress={() => {}}>
            {/* <Text>D</Text> */}
            <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/exerciseicon.png')}
                    />
        </ActionButton.Item>

        <ActionButton.Item buttonColor='rgb(121, 137, 136)' title="All Tasks" onPress={() => {}}>
            {/* <Text>E</Text> */}
            <Image
                    style={styles.iconsmalltwo}
                    resizeMode="contain"
                    source={require('../assets/images/weighticon.png')}
                    />
        </ActionButton.Item>

</ActionButton>
</View>
</View>

export default RainbowButtons;
 