import { StyleSheet } from 'react-native'

export const MyStyles = StyleSheet.create({ 
    overlayView: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255,255,255,0.7)',
        height: '100%',
        width: 385
    },
    overlayText: {
        textAlign: 'center',
        paddingTop: 50
    },
    labelColor: {
        color: 'rgba(1,1,1,0)'
    }
});