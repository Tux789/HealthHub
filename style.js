import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
       backgroundColor: 'white',
       flex: 1,
    },
    
    input: {
       marginLeft: 15,
       marginRight: 15,
       marginLeft: 15,
       marginTop: 5,
       marginBottom: 10,
       height: 40,
       borderColor: '#60718d',
       borderWidth: 1,
       paddingLeft: 8,
    },
    
  
    submitButton: {
       backgroundColor: '#60718d',
       padding: 10,
       paddingTop: 11,
       marginTop: 5,
       marginBottom: 15,
       marginLeft: 15,
       marginRight: 15,
       height: 40,
    },
  
    submitButtonText:{
       color: 'white'
    },
  
    imgStyle: {
     width: 180,
     backgroundColor: 'white',
     justifyContent: "center",
   },
   imgContain: {
     paddingTop: 10,
     paddingBottom: 20,
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
  
   paragraph: {
     fontSize: 10,
     paddingTop: 55,
     paddingBottom: 15,
     paddingLeft: 15,
     paddingRight: 15,

   },

   footnote: {
    fontSize: 10,
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: "center",
  },
  
  //  link: {
  //    marginTop: 12,
  //    marginBottom: 5,
  //   //  color: "blue",
  //    fontSize: 6,
  //   // //  fontWeight: "bold",
  //   //  textAlign: "center",
  //   //  borderBottomColor: "blue",
  //  },
   linkinfo: {
     marginTop: 12,
     marginBottom: 5,
   },

   linktext: {
    color: "blue",
    fontSize: 16,
    textAlign: "center",
    borderBottomColor: "blue",
   },
   button: {
    position: 'absolute',
    bottom: 20,
    left: 199,
    paddingLeft: 10
   },
   iconcool: {
    width: 25
   },
   
   flytext: {
   fontSize: 7,
   color: "white",
   marginTop: 0,
   padding: 0
   },

   iconsmall: {
    width: 16,
    marginTop: 0,
    padding: 0
   },

   iconsmalltwo: {
    width: 20,
    marginTop: 0,
    padding: 0
   },
   accordionstyle: {
    fontFamily: 'raleway-regular',
   } 


  });

export default styles;