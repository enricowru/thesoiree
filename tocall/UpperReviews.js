import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SReviews } from '../styles/SReviews';

const UpperReviews = ({ averageRating, totalReviews }) => {
    const rating = Math.round(averageRating);
    
    return (
        <>
            <View style={SReviews.upperContainer}>
                <Text style={SReviews.averageRating}>{averageRating.toFixed(1)}</Text>

                <View style={SReviews.upperStarsContainer}>
                    {[...Array(5)].map((_, index) => (
                        <MaterialIcons
                            key={index}
                            name={index < rating ? 'star' : 'star-outline'}
                            size={35}
                            color={index < rating ? "#FFD700" : "#000"}
                        />
                    ))}
                </View>

                <Text style={SReviews.reviewCount}>based on {totalReviews} reviews</Text>
            </View>

            <Text style={SReviews.latestReviewsHeader}>Latest Reviews</Text>
        </>
    );
};

export default UpperReviews;