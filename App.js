import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import CreateAccountScreen from './modules/create-account/create-account'
import RecoverPasswordScreen from './modules/recover-password/recover-password'
import styles from './style'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   apiUrl = process.env.API_BASE_URL || "https://fathomless-shore-28246.herokuapp.com";
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }

   //Jeff's change for login auth logic
   login = (email, pass) => {
    fetch(`${this.apiUrl}/api/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      })
    })
      .then((results) => console.log(results));
  }
  //End Jeff's insertion for login auth logic

   render(){
      return (
        <ScrollView>
         <View style = {styles.container}>
         <View style={styles.imgContain}>
            <Image 
              style={styles.imgStyle} 
              resizeMode="contain" 
              source={require('./assets/images/healthHubLogo.png')}
            />
         </View>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "#60718d"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "#60718d"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
               
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
            <Button style = {styles.link}
                  onPress={() => this.props.navigation.navigate('Account')}
                  title="Create Account"/>
            <Button style = {styles.link}
                  onPress={() => this.props.navigation.navigate('Recover')}
                  title="Forgot Password"/>
            <Text style ={styles.paragraph}>
            You should consult with a healthcare professional before starting any diet, exercise, supplementation or medication program. Statements on Health Hub about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent disease. If you have a health concern of any kind consult with your health care professional. Information presented by Living Fuel is for educational purposes only and is not meant to substitute for the advice of a doctor or other medical professional. Health Hub does not make any medical claims or warranties regarding the use of the products listed on this site. The information presented is general in nature and these remedies may not be for everyone. Like other remedies, supplements and herbs do have side effects. You should consult you doctor before taking any medication.
            </Text>
            <Text style ={styles.footnote}>
            &#169;2018 HealthHub
            </Text>
         </View>
         </ScrollView>
      )
   }
}
export default Inputs

const RootStack = createStackNavigator(
  {
    Home: Inputs,
    Account: CreateAccountScreen,
    Recover: RecoverPasswordScreen
  }, 
  {
    initialRouteName: 'Home'
  }
);


export default class App extends Component {
  render() {
    return <RootStack/>;
  }
};

  imgStyle: {
    width: 220,
    backgroundColor: 'white',

  },
  imgContain: {
    paddingTop: 40,
    paddingLeft: 90,
    paddingBottom: 10,
  },

  paragraph: {
    fontSize: 10,
    padding: 15,
  },

  link: {
    margin: 12,
    color: "blue",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    borderBottomColor: "blue",
  }
})