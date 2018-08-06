import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,
        left: 150,
    },
    home: {
        flex:1,
        //height: 670,
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    container: {
        backgroundColor: 'white',
        flex: 1,
     },
     imgStyle: {
        width: 180,
        backgroundColor: 'white',
        justifyContent: "center",
      },
      imgContain: {
        paddingTop: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      container: {
        backgroundColor: 'white',
        flex: 1,
      },
      textTitle: {
        textAlign: 'center',
        paddingBottom: 30,
        // fontFamily: 'raleway-regular',
        fontSize: 14
      } 
});

export default styles;