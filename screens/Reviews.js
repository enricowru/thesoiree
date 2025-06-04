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
    if (Array.isArray(reviews)) {
      setDisplayReviews(reviews);
    }
  }, [reviews]);

  // Handle screen focus to refresh reviews
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (Array.isArray(reviews)) {
        setDisplayReviews(reviews);
      }
    });
    return unsubscribe;
  }, [navigation, reviews]);

  // If no reviews, fallback to hardcoded static reviews from main code
  const fallbackReviews = [
    {
      username: "Julie Han",
      feedback: "Amazing experience! Will definitely come back.",
      fpictures: [
        require('../postimages/a1.jpg'),
        require('../postimages/a2.jpg'),
        require('../postimages/a3.jpg'),
      ],
      userpic: require('../postimages/reviewerspfp/1.jpg'),
      date: "February 04, 2025",
      rating: 5,
    },
    {
      username: "Mark Lee",
      feedback: "Good service, but a bit slow.",
      fpictures: [
        require('../postimages/b1.jpg'),
        require('../postimages/b2.jpg'),
      ],
      userpic: require('../postimages/reviewerspfp/2.jpg'),
      date: "January 14, 2025",
      rating: 4,
    },
    {
      username: "Mark Lee",
      feedback: "Naubusan aq shanghai.",
      fpictures: [
        require('../postimages/c3.jpg'),
      ],
      userpic: require('../postimages/reviewerspfp/3.jpg'),
      date: "December 28, 2024",
      rating: 3,
    }
  ];

  const reviewsToRender = displayReviews.length > 0 ? displayReviews : fallbackReviews;

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

        {reviewsToRender.map((review, index) => (
          <LowerReviews
            key={`${review.username}-${review.date}-${index}`}
            username={review.username}
            feedback={review.feedback}
            fpictures={review.fpictures}
            userpic={review.userpic}
            date={review.date}
            rating={review.rating}
          />
        ))}
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
