import { StyleSheet } from 'react-native'

export const MyStyles = StyleSheet.create({ 
    overlayView: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.7)',
        height: '100%',
        width: '150%'
    },
    overlayText: {
        paddingTop: '5%',
        paddingRight: '35%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#60718d'   
    },
    overlayTextTwo: {
        paddingRight: '35%',
        textAlign: 'center',
        fontSize: 18,
        color: '#60718d'   
    },
    labelColor: {
        color: 'rgba(1,1,1,0)'
    }
});