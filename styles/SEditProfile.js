import { StyleSheet } from 'react-native';

export const SEditProfile = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white'
    },
    pfp: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        borderRadius: 100,
        margin: 10,
    },
    imageControls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        width: '90%',
    },
    editButton: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 8,
        marginHorizontal: 5,
        minWidth: 120,
        alignItems: 'center',
    },
    disabledButton: {
        opacity: 0.5,
    },
    buttonText: {
        fontFamily: 'jostsemi',
        fontSize: 14,
        color: '#333',
    },
    filterContainer: {
        width: '90%',
        marginBottom: 15,
    },
    filterTitle: {
        fontFamily: 'jostsemi',
        fontSize: 16,
        marginBottom: 10,
    },
    filterButton: {
        backgroundColor: '#f0f0f0',
        padding: 8,
        borderRadius: 6,
        marginRight: 8,
        minWidth: 80,
        alignItems: 'center',
    },
    activeFilter: {
        backgroundColor: '#000',
    },
    filterText: {
        fontFamily: 'jostmedium',
        fontSize: 14,
        color: '#333',
    },
    recentImagesContainer: {
        width: '90%',
        marginBottom: 20,
    },
    recentTitle: {
        fontFamily: 'jostsemi',
        fontSize: 16,
        marginBottom: 10,
    },
    recentImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    lower: {
        width:'100%',
        height: 65,
        flexDirection:'row',
        borderBottomWidth:0.5,
        alignContent: 'center',
        alignItems: 'center',
    },
    savebutton: {
        backgroundColor: 'black',
        height: 40,
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 40
    },
    savetext: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'jostmedium'
    },
    inputtitle: {
        flex: 1,
        marginLeft: 15,
        fontFamily: 'jostsemi'
    },
    inputContainer: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputvalue: {
        flex: 1,
        fontFamily: 'jostmedium',
    },
    firstInput: {
        borderTopWidth: 0.5,
    },
    eyeButton: {
        marginRight: 15,
        padding: 5,
    }
});