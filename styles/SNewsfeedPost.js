import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const SNewsfeedPost = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 10,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    mainname: {
        fontFamily: 'jostbold',
        fontSize: 16,
    },
    date: {
        fontFamily: 'jostmedium',
        color: '#666',
        fontSize: 14,
    },
    imageContainer: {
        width: '100%',
        height: 300,
        backgroundColor: '#f8f8f8',
    },
    image: {
        width: width,
        height: 300,
    },
    caption: {
        padding: 15,
        fontFamily: 'jostmedium',
        fontSize: 14,
        color: '#333',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCount: {
        marginLeft: 5,
        fontFamily: 'jostmedium',
        fontSize: 14,
        color: '#333',
    },
    username: {
        fontFamily: 'jostbold',
        fontSize: 14,
        marginRight: 5,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#000',
    },
    inactiveDot: {
    }
});