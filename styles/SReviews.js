import { StyleSheet } from 'react-native';

export const SReviews = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 20,
        marginHorizontal: 15,
        marginVertical: 8,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileImage: {
        width: 44,
        height: 44,
        borderRadius: 22,
        marginRight: 12,
    },
    userTextInfo: {
        justifyContent: 'center',
    },
    username: {
        fontSize: 16,
        fontFamily: 'jostsemi',
        color: '#333',
        marginBottom: 2,
    },
    date: {
        fontSize: 12,
        color: '#666',
        fontFamily: 'jostlight',
    },
    ratingContainer: {
        flexDirection: 'row',
        marginBottom: 12,
        alignItems: 'center',
    },
    reviewText: {
        fontSize: 14,
        color: '#333',
        marginBottom: 16,
        fontFamily: 'jostlight',
        lineHeight: 20,
    },
    imageList: {
        marginLeft: -8,
    },
    imageContainer: {
        paddingHorizontal: 8,
        gap: 12,
    },
    reviewImage: {
        width: 140,
        height: 140,
        borderRadius: 8,
    },
    addbutton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    // Upper Reviews Styles
    upperContainer: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: 'white',
        marginHorizontal: 15,
        marginBottom: 20,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    averageRating: {
        fontSize: 72,
        fontFamily: 'jostblack',
        color: '#000',
        marginBottom: 10,
    },
    upperStarsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
        gap: 8,
    },
    reviewCount: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'jostlight',
    },
    latestReviewsHeader: {
        fontSize: 24,
        fontFamily: 'jostbold',
        color: '#000',
        marginHorizontal: 15,
        marginBottom: 15,
    }
});