import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import TitleImage from "../../components/TitleImage";
import NavButton from "../../components/NavButton";
import SubmitButton from "../../components/SubmitButton";
import styles from '../../style';
import apiUrl from "../../apiRoutes";
import FormInput from '../../components/FormInput';

class CreateAccountScreen extends React.Component {
  state = {
    username: "",
    email: "",
    password: "",
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text })
  }
  handleUsername = (text) => {
    this.setState({ username: text });
  }

  //Jeff's change for login auth logic
  signup = (username, email, pass) => {
    fetch(`${this.apiUrl}/api/signup`, {
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
        {/* <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Username"
          placeholderTextColor="#60718d"
          autoCapitalize="none"
          onChangeText={this.handleUsername} /> */}
          <FormInput name="Username" onchange={this.handleUsername} />
        {/* <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Email"
          placeholderTextColor="#60718d"
          autoCapitalize="none"
          onChangeText={this.handleEmail} /> */}
          <FormInput name="Email" onchange={this.handleEmail}/>

        {/* <TextInput style={styles.input}
          underlineColorAndroid="transparent"
          placeholder="Password"
          placeholderTextColor="#60718d"
          autoCapitalize="none"
          onChangeText={this.handlePassword} /> */}
          <FormInput name="Password" secureTextEntry={true} onchange={this.handlePassword} />

        {/* <TouchableOpacity
          style={styles.submitButton}
          onPress={
            () => this.login(this.state.username, this.state.email, this.state.password)
          }>
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity> */}
        <SubmitButton onPress={() =>this.login(this.state.username, this.state.email, this.state.password)} />
        <NavButton onPress={() => this.props.navigation.navigate("Home")}>Login to Account</NavButton>
        <NavButton onPress={() => this.props.navigation.navigate("Recover")}>Forgot Password</NavButton>
        <Text style={styles.paragraph}>
          You should consult with a healthcare professional before starting any diet, exercise, supplementation or medication program. Statements on Health Hub about products and health conditions have not been evaluated by the U.S. Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent disease. If you have a health concern of any kind consult with your health care professional. Information presented by Living Fuel is for educational purposes only and is not meant to substitute for the advice of a doctor or other medical professional. Health Hub does not make any medical claims or warranties regarding the use of the products listed on this site. The information presented is general in nature and these remedies may not be for everyone. Like other remedies, supplements and herbs do have side effects. You should consult you doctor before taking any medication.
         </Text>
        <Text style={styles.footnote}>
          &#169;2018 HealthHub
         </Text>
      </View>
    </ScrollView>)
  }
}

export default CreateAccountScreen;