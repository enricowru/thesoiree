import { StyleSheet } from 'react-native';

export const SHeader = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60, 
        alignContent: 'center',
    },
    left: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        flex: 2,
        alignItems: 'center',
    },
    right: {
        flex: 1,
        alignItems: 'flex-end',
    },
    text: {
        fontFamily: 'jostsemi',
        fontSize: 24,
        textAlign: 'center',
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginRight: 10,
    },
    qr: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
