import { StyleSheet, Text, View } from 'react-native';

export const SProfile = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 0,
        backgroundColor: 'white'
    },
    pfp: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        borderRadius: 100,
        margin: 5,
    },
    username: {
        fontSize: 25,
        margin:5,
        fontFamily: 'jostbold'
    },
    lower: {
        flexDirection: 'row',
        borderTopWidth: 0.5,
        height: 50,
        width: '100%',
        alignItems: 'center',
    },
    lowertext: {
        fontSize: 16,
        marginLeft: 5,
        fontFamily: 'jostsemi'
    },
    lowericon: {
        marginLeft: 10,
    },
});
