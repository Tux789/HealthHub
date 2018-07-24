import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

class Inputs extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render(){
      return (
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
            <Text style = {styles.link}
                  onPress={() => Linking.openURL('#')}>
              Create Account
            </Text>
            <Text style = {styles.link}
                  onPress={() => Linking.openURL('#')}>
              Forgot Password
            </Text>
            <Text style ={styles.paragraph}>
            You should consult with a healthcare professional before starting any diet, exercise, supplementation or medication program. Statements on Health Hub about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent disease. If you have a health concern of any kind consult with your health care professional. Information presented by Living Fuel is for educational purposes only and is not meant to substitute for the advice of a doctor or other medical professional. Health Hub does not make any medical claims or warranties regarding the use of the products listed on this site. The information presented is general in nature and these remedies may not be for everyone. Like other remedies, supplements and herbs do have side effects. You should consult you doctor before taking any medication.
            </Text>
         </View>
      )
   }
}
export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   
   input: {
      margin: 15,
      height: 40,
      borderColor: '#60718d',
      borderWidth: 1,
      paddingLeft: 8,
   },

   submitButton: {
      backgroundColor: '#60718d',
      padding: 10,
      paddingTop: 11,
      margin: 15,
      height: 40,
   },

   submitButtonText:{
      color: 'white'
   },

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