import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native'
import { ButtonGroup } from 'react-native-elements'
import NavButton from "../../components/NavButton"
import RainbowButtons from "../../components/RainbowButtons"
import styles from '../../style'
import apiUrl from "../../apiRoutes"

class Inputs extends Component {
  state = {
    goalType: '',
    numberInput: '',
    index: null,
    activity: '',
    placeholder: ''
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
          if(results.status === 401){
              this.props.navigation.navigate('Login');
            }
        })
        .catch(function(error) {
          console.log(error)
        })  
  }
  
  updateIndex = (index) => {
    this.setState({index: index});
    switch(index) {
      case 0: 
        this.setState({ 
        	activity: 'Track Smoking',
        	goalType: 'TRACK SMOKING',
        	placeholder: 'Number of times smoked'

        })
        break;
      case 1:
        this.setState({ 
        	activity: 'Track Exercise', 
        	goalType: 'TRACK EXERCISE',
        	placeholder: 'Minutes exercised'

        })
        break;
      case 2:
        this.setState({ 
        	activity: 'Track Sleep',
        	goalType: 'TRACK SLEEP',
        	placeholder: 'Hours slept' 
        }) 
        break;
      case 3:
        this.setState({ 
        	activity: 'Track Weight',
        	goalType: 'TRACK WEIGHT',
        	placeholder: 'Current weight' 
        })
        break;
      case 4:
        this.setState({ 
        	activity: 'Track Social Interactions',
        	goalType: 'IMPROVE SOCIAL INTERACTIONS',
        	placeholder: 'Number of social interactions' 
        })
        break;       
    }
  }

  handleInput = (count) => {
  	parseInt(count);
  	this.setState({ numberInput: count });
  }

  postActivity = (goalType, number) => {
    switch (goalType) {
      case 'TRACK SMOKING':
        fetch(`${apiUrl}/api/activities`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              goalType: goalType,
              currentSmokes: number
            })
        })
        .then((results) =>{
          console.log(results);
          alert('Activity Posted');
        })
        .catch(function(error) {
          console.log(error)
        }); 
        break;
      case 'TRACK EXERCISE':
        fetch(`${apiUrl}/api/activities`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              goalType: goalType,
              currentExerciseMinutes: number
            })
        })
        .then((results) =>{
          console.log(results);
          alert('Activity Posted');
        })
        .catch(function(error) {
          console.log(error)
        });
        break;
      case 'TRACK SLEEP':
        fetch(`${apiUrl}/api/activities`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              goalType: goalType,
              currentSleepHours: number
            })
        })
        .then((results) =>{
          console.log(results);
          alert('Activity Posted');
        })
        .catch(function(error) {
          console.log(error)
        });
        break;
      case 'TRACK WEIGHT':
        fetch(`${apiUrl}/api/activities`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              goalType: goalType,
              currentWeight: number
            })
        })
        .then((results) =>{
          console.log(results);
          alert('Activity Posted');
        })
        .catch(function(error) {
          console.log(error)
        });
        break;
      case 'IMPROVE SOCIAL INTERACTIONS':
        fetch(`${apiUrl}/api/activities`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify({
              goalType: goalType,
              currentSocialOutings: number
            })
        })
        .then((results) =>{
          console.log(results);
          alert('Activity Posted');
        })
        .catch(function(error) {
          console.log(error)
        });
        break;
      default:
        console.log("Error posting activity")
    }
    this.setState({ numberInput: '' }); 
  }

 

  render() {

    const smokingImage = () =>
      <Image
        style={styles.iconsmalltwo}
        resizeMode="contain"
        source={require('../../assets/images/timesSmoked.png')}
      />

    const exerciseImage = () =>
      <Image
        style={styles.iconsmalltwo}
        resizeMode="contain"
        source={require('../../assets/images/minutesExercisedtoday.png')}
      />

    const sleepImage = () =>
      <Image
        style={styles.iconsmalltwo}
        resizeMode="contain"
        source={require('../../assets/images/hoursSlept.png')}
      />  

    const weightImage = () =>
      <Image
        style={styles.iconsmalltwo}
        resizeMode="contain"
        source={require('../../assets/images/weightasoftoday.png')}
      /> 

    const socialImage = () =>
      <Image
        style={styles.iconsmalltwo}
        resizeMode="contain"
        source={require('../../assets/images/socialized.png')}
      />     
    
    const buttons = [{ element: smokingImage }, { element: exerciseImage }, { element: sleepImage }, { element: weightImage }, { element: socialImage }]
    const style = StyleSheet.create({
      healthHubLogo: {
        paddingTop: 10,
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
      },
      trackingSpan: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
      },
      trackingSpanText: {
        fontSize: 20,
        fontWeight: 'bold'
      }
    })

    return (
      <View style={styles.home}>
      <ScrollView>
        <View style={styles.container}>

                <View style={style.healthHubLogo}>
                  <Image
                    style={styles.imgStyle}
                    resizeMode="contain"
                    source={require('../../assets/images/healthHubLogo.png')}
                  />
                </View>

                <View style={style.trackingSpan}>
                  <Text style={style.trackingSpanText}>
                    {this.state.activity}
                  </Text>
                </View>

                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={this.state.index}
                  buttons={buttons}
                  containerStyle={{height: 60}}
                />

                <TextInput style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder={this.state.placeholder}
                  placeholderTextColor="#60718d"
                  autoCapitalize="none"
                  value={this.state.numberInput}
                  onChangeText={this.handleInput} 
                />

                <TouchableOpacity
                  style={styles.submitButton}
                  onPress={() => this.postActivity(this.state.goalType, this.state.numberInput)}
                >
                  
                  <Text style={styles.submitButtonText}> Track Activity </Text>
                </TouchableOpacity>

                    </View>
                </ScrollView>
                <RainbowButtons
                  feed={() => this.props.navigation.navigate('Home')}
                  friends={() => this.props.navigation.navigate('Friends')}
                  userActivity={() => this.props.navigation.navigate('UserDash')}
                  trackActivity={() => this.props.navigation.navigate('ActivityInput')}
                />
            </View> 
    )
  }
}
export default Inputs