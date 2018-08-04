import React, { component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Button, ButtonGroup } from 'react-native-elements';
import NavButton from "../components/NavButton";
import FormInput from "../components/FormInput";
import TitleImage from "../components/TitleImage";
import ActivityCard from "../components/ActivityCard/ActivityCard";

import apiUrl from '../apiRoutes';

class TestView extends React.Component {
componentDidMount(){  
        fetch(`${apiUrl}/api/isauth`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },   
        })
          .then((results) =>{
              if(results.status === "401"){
                this.props.navigation.navigate('Login');
          }
        })      
}

    render() {
       return <ScrollView>
           <TitleImage />   
           <ActivityCard />
           <ActivityCard />        
           </ScrollView>
    }
}
export default TestView;

