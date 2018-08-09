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
      datasets: [{
        data: [0]}
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
     
    chartConfig2: {
      backgroundColor: 'rgb(121, 137, 136)',
      backgroundGradientFrom: 'rgb(96, 113, 141)',
      backgroundGradientTo: 'rgb(121, 137, 136)',
      color: (opacity = 1.0) => `rgba(255, 255, 255, ${opacity})`,
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
    this.setState({ chartData: this.props.chartData })
    console.log(this.props.commentKey)    

  }

  handleClick = () => {
    if(this.state.expanded){
      this.setState({ expanded: false})
    }else{
      this.setState({ expanded: true })
    }
  }

  expandedInfo = () => {
    if (this.state.expanded) {
      return <View style={styles.expandBox}>
        <LineChart
          style={{paddingLeft: '2.5%'}}
          data={this.state.chartData}
          width={(Dimensions.get('window').width)*.95}
          height={220}
          chartConfig={this.state.chartConfig2}
  />
        
 
        <CommentsSection
          commentKey={this.props.commentKey}
        >
          {
            this.state.comments.map((comment, i) =>
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
    return ( 
      <TouchableOpacity onPress={this.handleClick}>
        <LineChart  
            style={{paddingLeft: '2.5%'}}
            data={this.state.chartData}
            width={(Dimensions.get('window').width)*.95}
            height={100}
            chartConfig={this.state.chartConfig}
        />
        <View style={MyStyles.overlayView}> 
          <Text style={MyStyles.overlayText}> { this.props.headerText } </Text>
          <Text style={MyStyles.overlayTextTwo}> { this.props.subText } </Text>
        </View>
        <Text style={styles.textActStyle}> 
        </Text>
        { this.expandedInfo() }
      </TouchableOpacity> 
    )
  }
}
export default Activity;