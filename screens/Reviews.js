import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import UpperReviews from '../tocall/UpperReviews';
import LowerReviews from '../tocall/LowerReviews';
import { MaterialIcons } from '@expo/vector-icons';
import { SReviews } from '../styles/SReviews';
import { useUser } from '../UserContext';

export default function Reviews({ navigation }) {
    const { reviews, averageRating, totalReviews } = useUser();
    const [displayReviews, setDisplayReviews] = useState(reviews || []);

    // Update displayReviews whenever reviews changes
    useEffect(() => {
        console.log('Reviews changed:', reviews);
        if (Array.isArray(reviews)) {
            setDisplayReviews(reviews);
        }
    }, [reviews]);

    // Handle screen focus
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Reviews screen focused');
            if (Array.isArray(reviews)) {
                setDisplayReviews(reviews);
            }
        });

        return unsubscribe;
    }, [navigation, reviews]);

    const renderReviews = () => {
        if (!Array.isArray(displayReviews) || displayReviews.length === 0) {
            return (
                <LowerReviews
                    username="Julie Han"
                    feedback="Amazing experience! Will definitely come back."
                    fpictures={[
                        require('../postimages/a1.jpg'),
                        require('../postimages/a2.jpg'),
                        require('../postimages/a3.jpg'),
                    ]}
                    userpic={require('../postimages/reviewerspfp/1.jpg')}
                    date="February 04, 2025"
                    rating={5}
                />
            );
        }

        return displayReviews.map((review, index) => (
            <LowerReviews
                key={`${review.username}-${review.date}-${index}`}
                username={review.username}
                feedback={review.feedback}
                fpictures={review.fpictures}
                userpic={review.userpic}
                date={review.date}
                rating={review.rating}
            />
        ));
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
            <ScrollView 
                style={{ flex: 1 }}
                contentContainerStyle={{ paddingVertical: 15 }}
                showsVerticalScrollIndicator={false}
            >
                <UpperReviews 
                    averageRating={averageRating} 
                    totalReviews={totalReviews} 
                />

                {renderReviews()}
            </ScrollView>

            <TouchableOpacity
                style={SReviews.addbutton}
                onPress={() => navigation.navigate("WriteReview")}
            >
                <MaterialIcons name="add" size={35} color="white" />
            </TouchableOpacity>
        </View>
    );
}
