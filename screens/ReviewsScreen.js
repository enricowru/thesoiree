// screens/ReviewsScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ReviewsScreen = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://your-backend-url.com/api/approved-reviews/')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.content}>{item.content}</Text>
      <Text style={styles.date}>
        {new Date(item.submitted_at).toLocaleDateString()}
      </Text>
    </View>
  );

  return (
    <FlatList
      data={reviews}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  reviewContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
  },
  name: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  content: {
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#666',
  },
});

export default ReviewsScreen;
