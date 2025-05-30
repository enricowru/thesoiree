import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SReviews } from '../styles/SReviews';
import { useUser } from '../UserContext';

const LowerReviews = ({ username, feedback, fpictures, userpic, date, rating }) => {
    const { loggedInUser } = useUser();

    // Check if this review belongs to the current user (case insensitive)
    const isCurrentUserReview = username && loggedInUser?.username && 
                              username.toLowerCase() === loggedInUser.username.toLowerCase();

    // Use current username if the review is from the logged-in user
    const displayUsername = isCurrentUserReview ? loggedInUser.username : username;

    const renderImage = (item) => {
        let source;
        if (typeof item === 'string') {
            source = { uri: item };
        } else if (item.uri) {
            source = item;
        } else {
            source = item;
        }
        return (
            <Image 
                source={source}
                style={SReviews.reviewImage}
                resizeMode="cover"
            />
        );
    };

    return (
        <View style={SReviews.container}>
            {/* User Info Header */}
            <View style={SReviews.header}>
                <View style={SReviews.userInfo}>
                    <Image 
                        source={typeof userpic === 'string' ? { uri: userpic } : userpic} 
                        style={SReviews.profileImage} 
                        resizeMode="cover"
                    />
                    <View style={SReviews.userTextInfo}>
                        <Text style={SReviews.username}>{displayUsername}</Text>
                        <Text style={SReviews.date}>{date}</Text>
                    </View>
                </View>
            </View>

            {/* Rating Stars */}
            <View style={SReviews.ratingContainer}>
                {[...Array(5)].map((_, index) => (
                    <MaterialIcons
                        key={index}
                        name={index < rating ? 'star' : 'star-outline'}
                        size={20}
                        color={index < rating ? "#000" : "#666"}
                        style={{ marginRight: index < 4 ? 4 : 0 }}
                    />
                ))}
            </View>

            {/* Review Text */}
            <Text style={SReviews.reviewText}>{feedback}</Text>

            {/* Review Images */}
            {fpictures && fpictures.length > 0 && (
                <FlatList
                    data={fpictures}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    style={SReviews.imageList}
                    renderItem={({ item }) => renderImage(item)}
                    contentContainerStyle={SReviews.imageContainer}
                />
            )}
        </View>
    );
};

export default LowerReviews;
