import { StyleSheet } from 'react-native';

export const SWriteReview = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    headerText: {
        flex: 1,
        marginLeft: 15,
        fontSize: 20,
        color: '#666',
        fontFamily: 'jostsemi'
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 15,
        color: '#333',
        fontFamily: 'jostsemi'
    },
    photoSection: {
        marginBottom: 30,
    },
    photoGrid: {
        flexDirection: 'row',
        gap: 15,
    },
    photoButton: {
        width: 100,
        height: 100,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    photoImage: {
        width: '100%',
        height: '100%',
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 12,
        padding: 4,
    },
    reviewInput: {
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 15,
        minHeight: 100,
        textAlignVertical: 'top',
        marginBottom: 20,
        fontFamily: 'jostlight',
        fontSize: 16,
    },
    submitButton: {
        backgroundColor: '#000',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        marginTop: 10,
    },
    submitButtonDisabled: {
        backgroundColor: '#999',
    },
    submitText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'jostsemi',
    },
    starRating: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
        gap: 8,
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
        color: '#666',
        fontFamily: 'jostlight',
    },
    navTextActive: {
        color: '#000',
        fontFamily: 'jostsemi',
    }
});
