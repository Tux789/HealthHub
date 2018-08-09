import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView, KeyboardAvoidingView } from 'react-native';
import NavButton from "../../components/NavButton";
import styles from '../../style';
import apiUrl from "../../apiRoutes";



class Inputs extends Component {
  state = {
    email: '',
    password: ''
  }

  componentWillMount() {
    fetch(`${apiUrl}/api/isauth`, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },   
    })
    .then((results) =>{
      if(results.status === 200){
          this.props.navigation.navigate('Home');
      }
    })
    .catch(function(error) {
      console.log(error)
    })  
  }

  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }

  //Jeff's change for login auth logic
  login = (email, pass) => {
    fetch(`${apiUrl}/api/login`, {
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
    .then((results) =>{ 
      if(results.status === 200)
        this.props.navigation.navigate('Home');
    });
  }

  render() {
    return (
      <KeyboardAvoidingView
        behavior="padding"
        style={{ flex: 1, justifyContent: 'space-between' }}
      >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imgContain}>
            <Image
              style={styles.imgStyle}
              resizeMode="contain"
              source={require('../../assets/images/healthHubLogo.png')}
            />
          </View>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor="#60718d"
            autoCapitalize="none"
            onChangeText={this.handleEmail} />

          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor="#60718d"
            autoCapitalize="none"
            onChangeText={this.handlePassword} />

          <TouchableOpacity
            style={styles.submitButton}
            onPress={
              () => this.login(this.state.email, this.state.password)
            }>
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkinfo}
            onPress={() => this.props.navigation.navigate('Account')}>
            <Text style={styles.linktext}> Create Account </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.linkinfo}
            onPress={() => this.props.navigation.navigate('Recover')}>
            <Text style={styles.linktext}> Forgot Password </Text>
          </TouchableOpacity>
          
          <Text style={styles.paragraph}>

            You should consult with a healthcare professional before starting any diet, exercise, supplementation or medication program. Statements on Health Hub about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent disease. If you have a health concern of any kind consult with your health care professional. Information presented by Living Fuel is for educational purposes only and is not meant to substitute for the advice of a doctor or other medical professional. Health Hub does not make any medical claims or warranties regarding the use of the products listed on this site. The information presented is general in nature and these remedies may not be for everyone. Like other remedies, supplements and herbs do have side effects. You should consult you doctor before taking any medication.
          </Text>
          <Text style={styles.footnote}>
            &#169;2018 HealthHub
          </Text>
                </View>

      </ScrollView>
      </KeyboardAvoidingView>
    )
  }
}
export default Inputs 