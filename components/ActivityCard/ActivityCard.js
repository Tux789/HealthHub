import React, { Component } from 'react';
import { View, Dimensions, Text, TouchableOpacity, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';
import styles from '../../style';
import { LineChart } from "react-native-chart-kit";
import Comment from "./Comment";
import CommentsSection from "./CommentsSection";
import 'babel-polyfill';
import { MyStyles } from "./style";

class Activity extends Component {
  state = {
    chartData:{
     // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          data: [
            50,
            20,
            2,
            86,
            71,
            100
          ]
        }
]
    },
    
    chartConfig: {
      backgroundColor: '#ffffff',
      backgroundGradientFrom: '#ffffff',
      backgroundGradientTo: '#aaaaaa',
      color: (opacity = 1.0) => `rgba(20, 20,20, ${opacity})`,
      style: {
        borderRadius: 16
      }
    },
    activityType: "",
    activityAmt: 0,
    comments: [], 
    expanded: false,
  }
  componentDidMount(){  
    this.setState({

      activityType: "TRACK SMOKING",
      comments: [{user: "John",comment:"Yo"},{user:"Jack", comment: "NO YO" }],
      activityAmt: 4,

    })
    console.log(this.state);
    // fetch(`${apiUrl}/api/isauth`, {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },   
    // })
    //   .then((results) =>{
    //       if(results.status === "401"){
    //         this.props.navigation.navigate('Login');
    //   }
    // })      
}
  handleClick = () => {
    if(this.state.expanded){
    this.setState({ expanded: false})
    }else{
      this.setState({expanded: true})
    }
  }
  expandedInfo = () => {
    if (this.state.expanded) {
      return <View>
        <LineChart
          data={this.state.chartData}
          width={Dimensions.get('window').width}
          height={220}
          chartConfig={this.state.chartConfig}
        />
        <CommentsSection>
          {
            this.state.comments.map((comment) =>
              <Comment user={comment.user} comment={comment.comment} />
            )
          }
        </CommentsSection>
      </View>
    } else {
      return <View></View>
    }
  }

  render() {
    // use view instead of div when using React Native
<<<<<<< HEAD
    return  <TouchableOpacity onPress={this.handleClick}>
      <LineChart  data={this.state.chartData}
          width={Dimensions.get('window').width}
          height={120}
          chartConfig={this.state.chartConfig}/>
      <Text> {this.state.activityType}</Text>
      <Text> {this.state.activityAmt}</Text>
      { this.expandedInfo() }
    </TouchableOpacity>

 
=======
    return ( 
      <TouchableOpacity onPress={this.handleClick}>
        <LineChart  
            data={this.state.chartData}
            width={Dimensions.get('window').width}
            height={120}
            width={348}
            chartConfig={this.state.chartConfig}/>
        <View style={MyStyles.overlayView}> 
          <Text style={MyStyles.overlayText}> Hello </Text>
        </View>
        <Text style={styles.textActStyle}> 
        {this.state.activityType} {this.state.activityAmt}</Text>
        { this.expandedInfo() }
    </TouchableOpacity> )
>>>>>>> f1553ea4eb759a3d068bcf54eed51538dbb5ccd4
  }
}
export default Activity;