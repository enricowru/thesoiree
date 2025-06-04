// screens/SubmitReviewScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const SubmitReviewScreen = () => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    fetch('https://your-backend-url.com/api/reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, content }),
    })
      .then((response) => {
        if (response.ok) {
          Alert.alert('Success', 'Review submitted! Awaiting approval.');
          setName('');
          setContent('');
        } else {
          Alert.alert('Error', 'Failed to submit review.');
        }
      })
      .catch((error) => {
        Alert.alert('Error', 'An error occurred. Please try again.');
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Your Review"
        value={content}
        onChangeText={setContent}
        style={[styles.input, styles.textArea]}
        multiline
      />
      <Button title="Submit Review" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 12,
  },
  textArea: {
    height: 100,
  },
});

export default SubmitReviewScreen;
