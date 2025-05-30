import { StyleSheet } from 'react-native';

export const SSettings = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    buttons: {
        backgroundColor: 'black',
        width: '65%',
        height: '13%',
        borderRadius: 30,
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        fontFamily: 'jostsemi'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
    modalTitle: {
        fontSize: 18,
        fontFamily: 'jostsemi',
        marginBottom: 10,
        textAlign: 'center'
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'justify',
        fontFamily: 'jostlight'
    },
    okButton: {
        alignSelf: 'flex-end',
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5
    },
    okButtonText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'jostsemi'
    }
});
