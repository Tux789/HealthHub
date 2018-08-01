import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    buttonText: {
        color: 'black',
        textAlign: "center",
    },
    button: {
        marginTop: 200
    },
    subButton1: {
        position: 'absolute',
        color: 'black',
        left: 5,
        bottom: 0
    },
    subButton2: {
        position: 'absolute',
        color: 'black',
        bottom: 30,
        left: 30
    },    
    subButton3: {
        position: 'absolute',
        color: 'black',
        bottom: 65,
        left: 65
    },
    subButtonView: {
        width: 100,
        height: 100,
        flex: 0,
        flexDirection: 'row',
        marginLeft: 100,
        backgroundColor: 'red'
    }
});

export default styles;