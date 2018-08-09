import { StyleSheet } from 'react-native'
import { Font } from 'expo';

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
     paddingTop: 35,
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

    textInstruct: {
    paddingTop: 0,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    },

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
        marginBottom: 20
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

   AcardStyle: {
      paddingLeft: 15,
      paddingRight: 15,
      width: 350,
      marginBottom: 20
    },

    AcardStyle2: {
    paddingLeft: 15,
    paddingRight: 15,
    width: 350,
    marginBottom: 25
    },

   home: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 15
   },
   scrollView: {
    height: 400
   },

   imgContain2: {
    paddingTop: 0,
    paddingBottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
   },

   styleType: {
    paddingBottom: 20
   },

   textActStyle: {
    paddingTop: 5,
    paddingBottom: 10
   },

   footnote2: {
    fontSize: 10,
    paddingTop: 80,
    paddingBottom: 30,
    textAlign: "center",
   },

   commentUser: {
    color: "rgb(121, 137, 136)",
    paddingTop: 2,
    paddingBottom: 4,

   },

   commentInside: {
    color: "white",
   },

   commentBox: {
    backgroundColor: '#60718d',
    borderRadius: 10,
    padding: 6,
    width: 345
   },
   
   imgUserStyle: {
      borderRadius: 10,
      width: 20,
      height: 20
   },

   userBox: {
    flex: 1, 
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 2
   },

   expandBox: {
   }

  });

export default styles;