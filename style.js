import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
       paddingTop: 23,
       backgroundColor: 'white',
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
     width: 200,
     backgroundColor: 'white',
  
   },
   imgContain: {
     paddingTop: 20,
     paddingLeft: 80,
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
  });

export default styles;