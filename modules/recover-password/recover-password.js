import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import TitleImage from "../../components/TitleImage";
import NavButton from "../../components/NavButton";
import SubmitButton from "../../components/SubmitButton";
import styles from '../../style';
import apiUrl from "../../apiRoutes";
import FormInput from '../../components/FormInput';

class RecoverPasswordScreen extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }

  //Jeff's change for login auth logic
  signup = (username, email, pass) => {
    fetch(`${apiUrl}/api/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: pass,
      })
    })
      .then((results) => console.log(results));
  };

  render() {
    return (<ScrollView>
<View style={styles.container}>
<TitleImage />
          <Text style={styles.textInstruct}>Enter your email and click submit to be sent a password reset link. 
          </Text>
          <FormInput name="Email" onChangeText={this.handleEmail}/>



        <SubmitButton onPress={() =>this.signup(this.state.username, this.state.email, this.state.password)} />
        <NavButton onPress={() => this.props.navigation.navigate("Home")}>Login to Account</NavButton>
        <Text style={styles.paragraph}>
          You should consult with a healthcare professional before starting any diet, exercise, supplementation or medication program. Statements on Health Hub about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent disease. If you have a health concern of any kind consult with your health care professional. Information presented by Living Fuel is for educational purposes only and is not meant to substitute for the advice of a doctor or other medical professional. Health Hub does not make any medical claims or warranties regarding the use of the products listed on this site. The information presented is general in nature and these remedies may not be for everyone. Like other remedies, supplements and herbs do have side effects. You should consult you doctor before taking any medication.
         </Text>
        <Text style={styles.footnote2}>
          &#169;2018 HealthHub
         </Text>
      </View>
    </ScrollView>)
  }
}







export default RecoverPasswordScreen;